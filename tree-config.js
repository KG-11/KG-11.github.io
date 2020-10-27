const treeConfig = [{
        name: 'tree1',
        coords: [80.18646, 13.10885],
        musicId: 'tree1_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    },
    {
        name: 'tree2',
        coords: [80.18378, 13.10774],
        musicId: 'tree2_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    },
    {
        name: 'tree3',
        coords: [80.18430, 13.11035],
        musicId: 'tree3_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    },
    {
        name: 'tree4',
        coords: [80.18442, 13.11118],
        musicId: 'tree4_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    },
    {
        name: 'tree5',
        coords: [80.18648, 13.10975],
        musicId: 'tree5_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    },
    {
        name: 'tree6',
        coords: [80.1865728, 13.10360],
        musicId: 'tree6_audio',
        allowMusicPlayBack: false,
        musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        markerHTML: `<div class="hola1"><x3d width='100px' height='80px'> <scene> <inline url="tree.x3d"> </inline> </scene>  </x3d></div>`
    }
];


function createThreeLayer(treeId) {
    var threeLayer = new maptalks.ThreeLayer(`${treeId}_Layer`, {
        forceRenderOnMoving: true,
        forceRenderOnRotating: true,
        // animation: true
    });

    threeLayer.prepareToDraw = function(gl, scene, camera) {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(50, 1.5, 0.1, 1000);
        camera.position.z = 5;

        geometry = new THREE.BoxGeometry(1, 1, 1);

        var leaveDarkMaterial = new THREE.MeshLambertMaterial({ color: 0x91E56E });
        var leaveLightMaterial = new THREE.MeshLambertMaterial({ color: 0xA2FF7A });
        var leaveDarkDarkMaterial = new THREE.MeshLambertMaterial({ color: 0x71B356 });
        var stemMaterial = new THREE.MeshLambertMaterial({ color: 0x7D5A4F });

        var light = new THREE.DirectionalLight(0xEEFFD3, 1);
        light.position.set(0, 0, 1);
        scene.add(light);

        var light = new THREE.DirectionalLight(0xFF0000, 0.4);
        light.position.set(1, 0, 0);

        scene.add(light);

        var light = new THREE.DirectionalLight(0xFFFFFF, 0.2);
        light.position.set(0, 1, 0);
        scene.add(light);

        var stem = new THREE.Mesh(geometry, stemMaterial);
        stem.position.set(0, 0, 0);
        stem.scale.set(0.3, 1.5, 0.3);

        var squareLeave01 = new THREE.Mesh(geometry, leaveDarkMaterial);
        squareLeave01.position.set(0.5, 1.6, 0.5);
        squareLeave01.scale.set(0.8, 0.8, 0.8);

        var squareLeave02 = new THREE.Mesh(geometry, leaveDarkMaterial);
        squareLeave02.position.set(-0.4, 1.3, -0.4);
        squareLeave02.scale.set(0.7, 0.7, 0.7);

        var squareLeave03 = new THREE.Mesh(geometry, leaveDarkMaterial);
        squareLeave03.position.set(0.4, 1.7, -0.5);
        squareLeave03.scale.set(0.7, 0.7, 0.7);

        var leaveDark = new THREE.Mesh(geometry, leaveDarkMaterial);
        leaveDark.position.set(0, 1.2, 0);
        leaveDark.scale.set(1, 2, 1);

        var leaveLight = new THREE.Mesh(geometry, leaveLightMaterial);
        leaveLight.position.set(0, 1.2, 0);
        leaveLight.scale.set(1.1, 0.5, 1.1);

        var ground = new THREE.Mesh(geometry, leaveDarkDarkMaterial);
        ground.position.set(0, -1, 0);
        ground.scale.set(2.4, 0.8, 2.4);

        tree = new THREE.Group();
        tree.add(leaveDark);
        tree.add(leaveLight);
        tree.add(squareLeave01);
        tree.add(squareLeave02);
        tree.add(squareLeave03);
        tree.add(ground);
        tree.add(stem);
        tree.rotation.y = 1.9;
        tree.rotation.x = 0.40;

        scene.add(tree);
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize("100", "70");
        document.getElementById(treeId).appendChild(renderer.domElement);

        renderer.render(scene, camera);
        threeLayer.config('animation', true);
    };
    threeLayer.addTo(map);
}
