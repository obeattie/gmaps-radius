$ ->
    circles = []
    
    map = new google.maps.Map($('#map')[0], {
        zoom: 10
        center: new google.maps.LatLng(51.500358, -0.125506) # London
        mapType: google.maps.MapTypeId.ROADMAP
        disableDefaultUI: true
        mapTypeControl: true
        mapTypeControlOptions:
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    })
    
    earthRadii = {
        # The radius of the earth in various units
        mi: 3963.1676
        km: 6378.1
        ft: 20925524.9
        mt: 6378100
        in: 251106299
        yd: 6975174.98
        fa: 3487587.49
        na: 3443.89849
        ch: 317053.408
        rd: 1268213.63
        fr: 31705.3408
    }
    
    polygonDestructionHandler = ->
        @setMap(null)
    
    circleDrawHandler = (e) ->
        # Get the radius in meters (as Google requires)
        select = $('#unitSelector')
        unitKey = $('option', select).eq(select[0].selectedIndex).val()
        radius = parseFloat(document.getElementById('radiusInput').value)
        radius = (radius / earthRadii[unitKey]) * earthRadii['mt']

        circle = new google.maps.Circle({
            center: e.latLng
            clickable: true
            draggable: false
            editable: false
            fillColor: '#004de8'
            fillOpacity: 0.27
            map: map
            radius: radius
            strokeColor: '#004de8'
            strokeOpacity: 0.62
            strokeWeight: 1
        })
        google.maps.event.addListener(circle, 'rightclick', polygonDestructionHandler)
        google.maps.event.addListener(circle, 'click', circleDrawHandler)
    
    google.maps.event.addListener(map, 'click', circleDrawHandler)
    
    searchInput = document.getElementById('searchInput')
    $(searchInput.form).on({ submit: -> false })
    searchBox = new google.maps.places.SearchBox(searchInput)
    google.maps.event.addListener(searchBox, 'places_changed', ->
        ### When a place is selected, center on it ###
        
        location = searchBox.getPlaces()[0]
        if location?
            if location.geometry.viewport?
                map.fitBounds(location.geometry.viewport)
                map.panToBounds(location.geometry.viewport)
            else
                map.setCenter(location.geometry.location)
        
        return
    )
    
    $(window).on('hashchange', (e) ->
        query = (new URI()).fragment(true).query(true)
        
        # Set center from lat/lng
        center_ = map.getCenter()
        center = [center_.lat(), center_.lng()]
        newCenter = [center[0], center[1]]
        if query.lat?
            newCenter[0] = parseFloat(query.lat)
        if query.lng?
            newCenter[1] = parseFloat(query.lng)
        if $.grep(newCenter, isNaN).length == 0
            map.setCenter({
                lat: newCenter[0],
                lng: newCenter[1]
            })
        
        # Set zoom from z
        if query.z?
            z = parseInt(query.z, 10)
            if !isNaN(z) then map.setZoom(z)
        
        # Set radius from r
        if query.r?
            $('#radiusInput').val(query.r)
        
        # Set unit from u
        if query.u?
            $('#unitSelector').val(query.u)
    ).triggerHandler('hashchange')
