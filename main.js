function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const leaf_1 = {
        color_point_1: [0.167, 0.880, 0.262], // Ini buat warna di daun 
        point_c: [-0.379, 0.857],
        point_d: [-0.390, 0.848],
        point_e: [-0.374, 0.841],
        point_f: [-0.403, 0.844],
        point_g: [-0.384, 0.800],
        point_h: [-0.410, 0.817],
        point_i: [-0.358, 0.809],
        point_j: [-0.440, 0.760],
        point_k: [-0.328, 0.748],
        point_l: [-0.461, 0.704],
        point_n: [-0.306, 0.689],
        point_o: [-0.390, 0.582],
        point_p: [-0.476, 0.642],
        point_q: [-0.285, 0.597],
        point_r: [-0.490, 0.552],
        point_s: [-0.358, 0.477],
        point_t: [-0.276, 0.533],
        point_u: [-0.274, 0.474],
        point_v: [-0.491, 0.480],
        point_w: [-0.475, 0.372],
        point_z: [-0.289, 0.356],
        point_a1: [-0.456, 0.303],
        point_e1: [-0.372, 0.299],
        point_c1: [-0.300, 0.300],
        point_d1: [-0.423, 0.207],
        point_f1: [-0.318, 0.206],
        point_g1: [-0.346, 0.142],
        point_h1: [-0.382, 0.124],
        point_i1: [-0.359, 0.109],
        point_j1: [-0.372, 0.097],
        point_k1: [-0.365, 0.074]
    };

    const leaf_2 = {
        color_point_2: [0.167, 0.880, 0.262],
        point_n1: [0.104, 0.367],
        point_p1: [0.110, 0.362],
        point_o1: [0.116, 0.369],
        point_r1: [0.110, 0.348],
        point_q1: [0.125, 0.348],
        point_s1: [0.136, 0.376],
        point_t1: [0.138, 0.346],
        point_u1: [0.174, 0.398],
        point_v1: [0.175, 0.332],
        point_b2: [0.238, 0.429],
        point_z1: [0.227, 0.313],
        point_d2: [0.280, 0.440],
        point_w1: [0.300, 0.360],
        point_a2: [0.299, 0.296],
        point_c2: [0.350, 0.457],
        point_e2: [0.364, 0.287],
        point_f2: [0.428, 0.465],
        point_j2: [0.447, 0.285],
        point_i2: [0.486, 0.464],
        point_m2: [0.481, 0.287],
        point_h2: [0.564, 0.453],
        point_g2: [0.540, 0.360],
        point_l2: [0.540, 0.300],
        point_o2: [0.633, 0.442],
        point_k2: [0.620, 0.324],
        point_n2: [0.678, 0.427],
        point_p2: [0.717, 0.359],
        point_q2: [0.750, 0.402],
        point_r2: [0.756, 0.388],
        point_s2: [0.777, 0.397]
    };

    const vertices = [
        //Left Object
        //triangle CDE
        ...leaf_1.point_c, ...leaf_1.color_point_1,
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_e, ...leaf_1.color_point_1,

        //triangle FDG
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        //30

        //triangle DEG
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_e, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,

        //triangle EGI
        ...leaf_1.point_e, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        //60

        //triangle FHG
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,

        //triangle HJG
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        //90

        //triangle GKI
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,

        //triangle GJK
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        //120

        //triangle JLK
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_k, ...leaf_1.color_point_1,

        //triangle KLN
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        //150

        //triangle LON
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //triangle LPO
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        //180

        //triangle NOQ
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,

        //triangle PRO
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        //210

        //triangle ROS
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,

        //triangle OSQ
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        //240

        //triangle QST
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_t, ...leaf_1.color_point_1,

        //triangle RVS
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,
        //270

        //triangle TSU
        ...leaf_1.point_t, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //triangle VWS
        ...leaf_1.point_v, ...leaf_1.color_point_1,
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        //300

        //triangle SWZ
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,

        //triangle SZU
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,
        //330

        //triangle WA1Z
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,

        //triangle ZA1C1
        ...leaf_1.point_z, ...leaf_1.color_point_1,
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        //360

        //triangle A1D1E1
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_e1, ...leaf_1.color_point_1,

        //triangle E1D1F1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        //390

        //triangle E1F1C1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,

        //triangle D1G1F1
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        //420

        //triangle D1H1G1
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //triangle G1H1I1
        ...leaf_1.point_g1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        //450

        //triangle H1J1I1
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_j1, ...leaf_1.color_point_1,
        ...leaf_1.point_i1, ...leaf_1.color_point_1,

        //triangle I1J1K1
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        ...leaf_1.point_j1, ...leaf_1.color_point_1,
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        //480

        //Right Object
        //triangle N1P101
        ...leaf_2.point_n1, ...leaf_2.color_point_2,
        ...leaf_2.point_p1, ...leaf_2.color_point_2,
        ...leaf_2.point_o1, ...leaf_2.color_point_2,

        //triangle P1R1Q1
        ...leaf_2.point_p1, ...leaf_2.color_point_2,
        ...leaf_2.point_r1, ...leaf_2.color_point_2,
        ...leaf_2.point_q1, ...leaf_2.color_point_2,

        //triangle P1Q1O1
        ...leaf_2.point_p1, ...leaf_2.color_point_2,
        ...leaf_2.point_q1, ...leaf_2.color_point_2,
        ...leaf_2.point_o1, ...leaf_2.color_point_2,

        //triangle O1Q1S1
        ...leaf_2.point_o1, ...leaf_2.color_point_2,
        ...leaf_2.point_q1, ...leaf_2.color_point_2,
        ...leaf_2.point_s1, ...leaf_2.color_point_2,

        //triangle S1Q1T1
        ...leaf_2.point_s1, ...leaf_2.color_point_2,
        ...leaf_2.point_q1, ...leaf_2.color_point_2,
        ...leaf_2.point_t1, ...leaf_2.color_point_2,

        //triangle S1T1U1
        ...leaf_2.point_s1, ...leaf_2.color_point_2,
        ...leaf_2.point_t1, ...leaf_2.color_point_2,
        ...leaf_2.point_u1, ...leaf_2.color_point_2,

        //triangle U1T1V1
        ...leaf_2.point_u1, ...leaf_2.color_point_2,
        ...leaf_2.point_t1, ...leaf_2.color_point_2,
        ...leaf_2.point_v1, ...leaf_2.color_point_2,

        //triangle U1V1W1
        ...leaf_2.point_u1, ...leaf_2.color_point_2,
        ...leaf_2.point_v1, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,

        //triangle U1W1B2
        ...leaf_2.point_u1, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_b2, ...leaf_2.color_point_2,

        //triangle V1W1Z1
        ...leaf_2.point_v1, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_z1, ...leaf_2.color_point_2,

        //triangle B2W1D2
        ...leaf_2.point_b2, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_d2, ...leaf_2.color_point_2,

        //triangle Z1W1A2
        ...leaf_2.point_z1, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_a2, ...leaf_2.color_point_2,

        //triangle D2W1C2
        ...leaf_2.point_d2, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_c2, ...leaf_2.color_point_2,

        //triangle W1A2E2
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_a2, ...leaf_2.color_point_2,
        ...leaf_2.point_e2, ...leaf_2.color_point_2,

        //triangle C2W1F2
        ...leaf_2.point_c2, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_f2, ...leaf_2.color_point_2,

        //triangle F2W1G2
        ...leaf_2.point_f2, ...leaf_2.color_point_2,
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,

        //triangle W1E2G2
        ...leaf_2.point_w1, ...leaf_2.color_point_2,
        ...leaf_2.point_e2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,

        //triangle E2G2J2
        ...leaf_2.point_e2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_j2, ...leaf_2.color_point_2,

        //triangle J2G2M2
        ...leaf_2.point_j2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_m2, ...leaf_2.color_point_2,

        //triangle F2G2I2
        ...leaf_2.point_f2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_i2, ...leaf_2.color_point_2,

        //triangle I2G2H2
        ...leaf_2.point_i2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_h2, ...leaf_2.color_point_2,

        //triangle M2G2L2
        ...leaf_2.point_m2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_l2, ...leaf_2.color_point_2,

        //triangle H2G2O2
        ...leaf_2.point_h2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_o2, ...leaf_2.color_point_2,

        //triangle G2L2K2
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_l2, ...leaf_2.color_point_2,
        ...leaf_2.point_k2, ...leaf_2.color_point_2,

        //triangle O2G2N2
        ...leaf_2.point_o2, ...leaf_2.color_point_2,
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_n2, ...leaf_2.color_point_2,

        //triangle G2N2K2
        ...leaf_2.point_g2, ...leaf_2.color_point_2,
        ...leaf_2.point_n2, ...leaf_2.color_point_2,
        ...leaf_2.point_k2, ...leaf_2.color_point_2,

        //triangle N2K2P2
        ...leaf_2.point_n2, ...leaf_2.color_point_2,
        ...leaf_2.point_k2, ...leaf_2.color_point_2,
        ...leaf_2.point_p2, ...leaf_2.color_point_2,

        //triangle N2P2Q2
        ...leaf_2.point_n2, ...leaf_2.color_point_2,
        ...leaf_2.point_p2, ...leaf_2.color_point_2,
        ...leaf_2.point_q2, ...leaf_2.color_point_2,

        //triangle P2Q2R2
        ...leaf_2.point_p2, ...leaf_2.color_point_2,
        ...leaf_2.point_q2, ...leaf_2.color_point_2,
        ...leaf_2.point_r2, ...leaf_2.color_point_2,

        //triangle Q2R2S2
        ...leaf_2.point_q2, ...leaf_2.color_point_2,
        ...leaf_2.point_r2, ...leaf_2.color_point_2,
        ...leaf_2.point_s2, ...leaf_2.color_point_2,
    ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0040;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[626] < -1.0 || vertices[701] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 481; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 210;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}

