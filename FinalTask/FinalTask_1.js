function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    //svar mesh;

    screen.init(volume, {
      width: window.innerWidth * 0.7,
      height: window.innerHeight * 0.8,
      targetDom: document.getElementById('display'),
      enableAutoResize: false
    });
    setup();
    screen.loop();

    function setup()
    {
        //外枠
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 2 );

        var light = new THREE.PointLight();
	    light.position.set( 0, 0, 5 );

        var shadeflag;//add
        shadeflag = 1;//add

        var smin = volume.min_value;
        var smax = volume.max_value;
        //var isovalue = KVS.Mix( smin, smax, 0.5 );
        var isovalue = 128
        //console.log(isovalue)
        //var isosurface = new KVS.Isosurface();
        //isosurface.setIsovalue( isovalue );
        //console.log(isovalue)
        isovalue = Math.round(isovalue);
        //console.log(isovalue)
        var surfaces = Isosurfaces( volume, isovalue, shadeflag)//add
        screen.scene.add( surfaces );

        document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );

        var line = KVS.ToTHREELine( box.exec( volume ) );
        //mesh = KVS.ToTHREEMesh( isosurface.exec( volume ) );
        //surfaces = Isosurfaces( volume, isovalue, Shadeflag);
        screen.scene.add( line );
        //screen.scene.add( mesh );

        document.getElementById('isovalue')
            .addEventListener('mousemove', function() {
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
            });

        document.getElementById('change-isovalue-button')
            .addEventListener('click', function() {
                //screen.scene.remove( mesh );
                screen.scene.remove( surfaces );
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                //var isosurface = new KVS.Isosurface();
                surfaces = Isosurfaces( volume, isovalue, shadeflag);
                //isosurface.setIsovalue( isovalue );
                //mesh = KVS.ToTHREEMesh( isosurface.exec( volume ) );
                //screen.scene.add( mesh );
                screen.scene.add( surfaces );
            });

        document.getElementById('light-on-button')
            .addEventListener('click', function() {
                screen.scene.add(light);
            });

        document.getElementById('light-off-button')
            .addEventListener('click', function() {
                screen.scene.remove(light);
            });

        document.getElementById('Basic-button')
            .addEventListener('click', function() {
                shadeflag = 0;
                console.log(shadeflag)
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shadeflag);
                screen.scene.add( surfaces );
            });

        document.getElementById('Phong-button')
            .addEventListener('click', function() {
                shadeflag = 1;
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shadeflag);
                screen.scene.add( surfaces );
            });

        document.getElementById('Lambert-button')
            .addEventListener('click', function() {
                shadeflag = 2;
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shadeflag);
                screen.scene.add( surfaces );
            });

        document.getElementById('Toon-button')
            .addEventListener('click', function() {
                shadeflag = 3;
                var value = +document.getElementById('isovalue').value;
                var isovalue = KVS.Mix( smin, smax, value );
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shadeflag);
                screen.scene.add( surfaces );
            });

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });

        window.addEventListener('resize', function() {
            screen.resize([
                window.innerWidth * 0.7,
                window.innerHeight * 0.8
            ]);
        });

        screen.draw();
    }
}


function changeIsovalue() {

}