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
    
    getPoints = (lat, lng, radius, earth) ->
        lat = (lat * Math.PI) / 180 # (radians)
        lon = (lng * Math.PI) / 180 # (radians)
        d = parseFloat(radius) / earth # d = angular distance covered on earth's surface
        
        points = []
        for x in [0..360]
            brng = x * Math.PI / 180 # (radians)
            destLat = Math.asin(Math.sin(lat) * Math.cos(d) + Math.cos(lat) * Math.sin(d) * Math.cos(brng))
            destLng = ((lon + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(lat), Math.cos(d) - Math.sin(lat) * Math.sin(destLat))) * 180) / Math.PI
            destLat = (destLat * 180) / Math.PI
            points.push(new google.maps.LatLng(destLat, destLng))
        
        return points
    
    polygonDestructionHandler = () ->
        @setMap(null)
    
    polygonDrawHandler = (e) ->
        # Get the desired radius + units
        select = document.getElementById('unitSelector')
        unitKey = select.getElementsByTagName('option')[select.selectedIndex].value
        earth = earthRadii[unitKey]
        radius = parseFloat(document.getElementById('radiusInput').value)
        # Draw the polygon
        points = getPoints(e.latLng.lat(), e.latLng.lng(), radius, earth)
        polygon = new google.maps.Polygon({
            paths: points
            strokeColor: '#004de8'
            strokeWeight: 1
            strokeOpacity: 0.62
            fillColor: '#004de8'
            fillOpacity: 0.27
            geodesic: true
            map: map
        })
        google.maps.event.addListener(polygon, 'rightclick', polygonDestructionHandler)
        google.maps.event.addListener(polygon, 'click', polygonDrawHandler)
    
    google.maps.event.addListener(map, 'click', polygonDrawHandler)
    
    searchInput = document.getElementById('searchInput')
    $(searchInput.form).on({ submit: () -> false })
    searchBox = new google.maps.places.SearchBox(searchInput)
    google.maps.event.addListener(searchBox, 'places_changed', () ->
        ### When a place is selected, center on it ###
        
        viewport = searchBox.getPlaces()[0]?.geometry.viewport
        if viewport?
            map.fitBounds(viewport)
            map.panToBounds(viewport)
        
        return
    )
