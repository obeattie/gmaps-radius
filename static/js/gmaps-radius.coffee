$ ->
    map = new google.maps.Map($('#map')[0], {
        zoom: 10
        center: new google.maps.LatLng(51.500358, -0.125506) # London
        mapType: google.maps.MapTypeId.ROADMAP
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
    
    polygonDestructionHandler = () ->
        @setMap(null)
    
    circleDrawHandler = (e) ->
        # Get the radius in meters (since that's what Google requires)
        select = $('#unitSelector')
        unitKey = $('option', select).eq(select[0].selectedIndex).val()
        radius = parseFloat(document.getElementById('radiusInput').value)
        radius = (radius / earthRadii[unitKey]) * earthRadii['mt']
        
        circle = new google.maps.Circle({
            center: e.latLng,
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
    $(searchInput.form).on({ submit: () -> false })
    searchBox = new google.maps.places.SearchBox(searchInput)
    google.maps.event.addListener(searchBox, 'places_changed', () ->
        console.log 'Places selected', searchBox.getPlaces()
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
