function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const leaf_1 = {
        color_point_1: [0.0920, 0.920, 0.147],
        color_point_2: [0.0590, 0.590, 0.0944], 
        point_e: [-0.52914, 0.55082],
        point_g: [-0.52723, 0.53494],
        point_h: [-0.51874, 0.54425],
        point_f: [-0.53955, 0.5322],
        point_i: [-0.51627, 0.52562],
        point_p1: [-0.56179, 0.53109],
        point_o1: [-0.54707, 0.50784],
        point_j: [-0.53544, 0.50892],
        point_n: [-0.56721, 0.4992],
        point_w1: [-0.5052, 0.49964],
        point_m1: [-0.53876, 0.45397],
        point_k: [-0.53133, 0.48345],
        point_z1: [-0.48, 0.46],
        point_m: [-0.5223, 0.41717],
        point_p: [-0.59847, 0.44264],
        point_k1: [-0.53523, 0.37976],
        point_a2: [-0.45, 0.4],
        point_r: [-0.63066, 0.37961],
        point_o: [-0.52, 0.34],
        point_t: [-0.65205, 0.31959],
        point_i1: [-0.53297, 0.27617],
        point_b2: [-0.42054, 0.33539],
        point_c2: [-0.4006, 0.27072],
        point_q: [-0.51268, 0.19855],
        point_v: [-0.67879, 0.22912],
        point_g1: [-0.53006, 0.07014],
        point_d2: [-0.38428, 0.20243],
        point_e2: [-0.36071, 0.08882],
        point_s: [-0.5083, -0.08262],
        point_f2: [-0.35, 0],
        point_b1: [-0.69727, 0.13733],
        point_d1: [-0.70838, 0.03701],
        point_h1: [-0.71049, -0.04745],
        point_e1: [-0.52426, -0.20746],
        point_g2: [-0.35014, -0.11915],
        point_h2: [-0.35777, -0.19816],
        point_i2: [-0.37579, -0.29728],
        point_u: [-0.49614, -0.37908],
        point_f1: [-0.39368, -0.42838],
        point_j1: [-0.7089, -0.09812],
        point_l1: [-0.6936, -0.19894],
        point_n1: [-0.66932, -0.31032],
        point_c1: [-0.51773, -0.53788],
        point_q1: [-0.42773, -0.55408],
        point_j2: [-0.44693, -0.60908],
        point_w: [-0.49822, -0.62884],
        point_z: [-0.49406, -0.69128],
        point_a1: [-0.50999, -0.69154],
        point_s1: [-0.62867, -0.44756],
        point_t1: [-0.59806, -0.5336],
        point_u1: [-0.56375, -0.6075],
        point_v1: [-0.5421, -0.64814],
        point_l: [-0.52198, -0.69196],
        point_r1: [-0.5, -0.75],
    };

    const leaf_2 = {
        color_point_3: [0.0920, 0.920, 0.147],
        color_point_4: [0.0590, 0.590, 0.0944],
        point_k2: [0.77523, 0.0363], 
        point_l2: [0.74789, 0.04116], 
        point_m2: [0.75229, 0.0268],
        point_a5: [0.73329, 0.02392],
        point_p3: [0.73926, 0.01513],
        point_w4: [0.71489, 0.02976],
        point_q3: [0.72853, 0.04851],  
        point_o3: [0.7168, 0.00006],
        point_b5: [0.68102, 0.0172],
        point_n3: [0.68447, -0.01857],
        point_m3: [0.65735, -0.02898],
        point_l3: [0.63887, -0.03144],
        point_r3: [0.70312, 0.05896],
        point_s3: [0.66608, 0.0713],
        point_v4: [0.63672, 0.02482],
        point_t3: [0.64328, 0.07771],
        point_u3: [0.60943, 0.08635],
        point_c5: [0.56945, 0.01019],
        point_k3: [0.62, -0.04],
        point_j3: [0.57978, -0.05294],
        point_i3: [0.53503, -0.06652],
        point_d5: [0.43919, 0.00406],
        point_h3: [0.49989, -0.07728],
        point_g3: [0.45888, -0.08509],
        point_v3: [0.57403, 0.0952],
        point_w3: [0.54, 0.1],
        point_u4: [0.51447, 0.01894],
        point_z3: [0.50001, 0.10405],
        point_a4: [0.46032, 0.10968],
        point_n2: [0.02373, -0.00188],
        point_p2: [0.0295, -0.00844],
        point_o2: [0.03642, 0.00035],
        point_b4: [0.42036, 0.11129],
        point_c4: [0.40004, 0.11154],
        point_t4: [0.37048, 0.01306],
        point_d4: [0.38011, 0.11076],
        point_e4: [0.34027, 0.10792],
        point_f3: [0.39989, -0.09173],
        point_e3: [0.36043, -0.09251],
        point_d3: [0.32215, -0.09056],
        point_e5: [0.31357, -0.00564],
        point_p4: [0.26027, 0.0064],
        point_f4: [0.30068, 0.10274],
        point_g4: [0.26031, 0.0942],
        point_h4: [0.22026, 0.08468],
        point_o4: [0.15979, 0.00228],
        point_i4: [0.18045, 0.07273],
        point_c3: [0.25589, -0.08496],
        point_r4: [0.2105, -0.00894],
        point_b3: [0.2092, -0.07435],
        point_a3: [0.16667, -0.0634],
        point_z2: [0.14351, -0.05656],
        point_s4: [0.12211, -0.00998],
        point_w2: [0.11301, -0.04484],
        point_v2: [0.08588, -0.03424],
        point_q4: [0.06682, -0.00988],
        point_u2: [0.06164, -0.02509],
        point_t2: [0.05056, -0.02348],
        point_s2: [0.03735, -0.01335],
        point_q2: [0.02964, -0.02303],
        point_j4: [0.14002, 0.05558],
        point_k4: [0.1002, 0.03475],
        point_n4: [0.09, 0],
        point_l4: [0.06896, 0.01699],
        point_m4: [0.04874, 0.00504],
        point_r2: [0.03679, -0.00718],
        point_o2: [0.03642, 0.00035],
    };

    const vertices = [
        //Left Object
        //triangle EFG
        ...leaf_1.point_e, ...leaf_1.color_point_1,
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,

        //triangle HGI
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        
        //30

        //triangle FGI
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,

        //triangle FP1O1
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_p1, ...leaf_1.color_point_1,
        ...leaf_1.point_o1, ...leaf_1.color_point_1,
        
        //60

        //triangle FIJ
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,

        //triangle P1O1N
        ...leaf_1.point_p1, ...leaf_1.color_point_1,
        ...leaf_1.point_o1, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        
        //90

        //triangle IJW1
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_w1, ...leaf_1.color_point_1,

        //triangle O1NM1
        ...leaf_1.point_o1, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_m1, ...leaf_1.color_point_1,

        //120

        //triangle JW1K
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_w1, ...leaf_1.color_point_1,
        ...leaf_1.point_k, ...leaf_1.color_point_1,

        //triangle W1KZ1
        ...leaf_1.point_w1, ...leaf_1.color_point_1,
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_z1, ...leaf_1.color_point_1,

        //150

        //triangle KZ1M
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_z1, ...leaf_1.color_point_1,
        ...leaf_1.point_m, ...leaf_1.color_point_1,

        //triangle NM1P
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_m1, ...leaf_1.color_point_1,
        ...leaf_1.point_p, ...leaf_1.color_point_1,

        //180

        //triangle PM1K1
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_m1, ...leaf_1.color_point_1,
        ...leaf_1.point_k1, ...leaf_1.color_point_1,

        //triangle Z1MA2
        ...leaf_1.point_z1, ...leaf_1.color_point_1,
        ...leaf_1.point_m, ...leaf_1.color_point_1,
        ...leaf_1.point_a2, ...leaf_1.color_point_1,

        //210

        //triangle PK1R
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        ...leaf_1.point_r, ...leaf_1.color_point_1,

        //triangle MA2O
        ...leaf_1.point_m, ...leaf_1.color_point_1,
        ...leaf_1.point_a2, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,

        //240

        //triangle RK1T
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        ...leaf_1.point_t, ...leaf_1.color_point_1,

        //triangle K1TI1
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        ...leaf_1.point_t, ...leaf_1.color_point_1,
        ...leaf_1.point_i1, ...leaf_1.color_point_1,

        //270

        //triangle A2OB2
        ...leaf_1.point_a2, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_b2, ...leaf_1.color_point_1,

        //triangle OB2C2
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_b2, ...leaf_1.color_point_1,
        ...leaf_1.point_c2, ...leaf_1.color_point_1,

        //300

        //triangle OC2Q
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_c2, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,

        //triangle TI1V
        ...leaf_1.point_t, ...leaf_1.color_point_1,
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //330

        //triangle I1VG1
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //triangle C2QD2
        ...leaf_1.point_c2, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_d2, ...leaf_1.color_point_1,

        //360

        //triangle D2QE2
        ...leaf_1.point_d2, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_e2, ...leaf_1.color_point_1,

        //triangle QE2S
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_e2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,

        //390

        //triangle E2SF2
        ...leaf_1.point_e2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_f2, ...leaf_1.color_point_1,

        //triangle VB1G1
        ...leaf_1.point_v, ...leaf_1.color_point_1,
        ...leaf_1.point_b1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //420

        //triangle B1D1G1
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_b1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //triangle H1D1G1
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //450

        //triangle E1H1G1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,

        //triangle G2SF2
        ...leaf_1.point_g2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_f2, ...leaf_1.color_point_1,

        //480

        //triangle G2SH2
        ...leaf_1.point_g2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_h2, ...leaf_1.color_point_1,

        //triangle I2SH2
        ...leaf_1.point_i2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_h2, ...leaf_1.color_point_1,

        //510

        //triangle I2SU
        ...leaf_1.point_i2, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //triangle I2F1U
        ...leaf_1.point_i2, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //540

        //triangle E1H1J1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_j1, ...leaf_1.color_point_1,

        //triangle E1L1J1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_l1, ...leaf_1.color_point_1,
        ...leaf_1.point_j1, ...leaf_1.color_point_1,

        //570

        //triangle E1L1N1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_l1, ...leaf_1.color_point_1,
        ...leaf_1.point_n1, ...leaf_1.color_point_1,

        //triangle E1C1N1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_n1, ...leaf_1.color_point_1,

        //600

        //triangle Q1F1U
        ...leaf_1.point_q1, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //triangle Q1J2U
        ...leaf_1.point_q1, ...leaf_1.color_point_1,
        ...leaf_1.point_j2, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //triangle WJ2U
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_j2, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,

        //630

        //triangle WJ2Z
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_j2, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,

        //triangle WA1Z
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,

        //660

        //triangle S1C1N1
        ...leaf_1.point_s1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_n1, ...leaf_1.color_point_1,

        //triangle S1C1T1
        ...leaf_1.point_s1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_t1, ...leaf_1.color_point_1,

        //690

        //triangle U1C1T1
        ...leaf_1.point_u1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_t1, ...leaf_1.color_point_1,

        //triangle U1C1V1
        ...leaf_1.point_u1, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_v1, ...leaf_1.color_point_1,

        //720

        //triangle C1V1W
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_v1, ...leaf_1.color_point_1,

        //triangle LWV1
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_v1, ...leaf_1.color_point_1,

        //triangle LR1W
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_r1, ...leaf_1.color_point_1,
        ...leaf_1.point_w, ...leaf_1.color_point_1,

        //750

        //Leaf Bone
        //triangle FO1K
        ...leaf_1.point_f, ...leaf_1.color_point_2,
        ...leaf_1.point_o1, ...leaf_1.color_point_2,
        ...leaf_1.point_k, ...leaf_1.color_point_2,

        //triangle FO1K
        ...leaf_1.point_f, ...leaf_1.color_point_2,
        ...leaf_1.point_o1, ...leaf_1.color_point_2,
        ...leaf_1.point_k, ...leaf_1.color_point_2,

        //780

        //triangle M1O1K
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_o1, ...leaf_1.color_point_2,
        ...leaf_1.point_k, ...leaf_1.color_point_2,

        //triangle M1MK
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_m, ...leaf_1.color_point_2,
        ...leaf_1.point_k, ...leaf_1.color_point_2,

        //810

        //triangle M1MK1
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_m, ...leaf_1.color_point_2,
        ...leaf_1.point_k1, ...leaf_1.color_point_2,

        //triangle OMK1
        ...leaf_1.point_o, ...leaf_1.color_point_2,
        ...leaf_1.point_m, ...leaf_1.color_point_2,
        ...leaf_1.point_k1, ...leaf_1.color_point_2,

        //840

        //triangle OI1K1
        ...leaf_1.point_o, ...leaf_1.color_point_2,
        ...leaf_1.point_i1, ...leaf_1.color_point_2,
        ...leaf_1.point_k1, ...leaf_1.color_point_2,

        //triangle OI1Q
        ...leaf_1.point_o, ...leaf_1.color_point_2,
        ...leaf_1.point_i1, ...leaf_1.color_point_2,
        ...leaf_1.point_q, ...leaf_1.color_point_2,

        //870

        //triangle G1I1Q
        ...leaf_1.point_g1, ...leaf_1.color_point_2,
        ...leaf_1.point_i1, ...leaf_1.color_point_2,
        ...leaf_1.point_q, ...leaf_1.color_point_2,

        //triangle G1SQ
        ...leaf_1.point_g1, ...leaf_1.color_point_2,
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_q, ...leaf_1.color_point_2,

        //900

        //triangle G1SE1
        ...leaf_1.point_g1, ...leaf_1.color_point_2,
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_e1, ...leaf_1.color_point_2,

        //triangle USE1
        ...leaf_1.point_u, ...leaf_1.color_point_2,
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_e1, ...leaf_1.color_point_2,

        //930

        //triangle UC1E1
        ...leaf_1.point_u, ...leaf_1.color_point_2,
        ...leaf_1.point_c1, ...leaf_1.color_point_2,
        ...leaf_1.point_e1, ...leaf_1.color_point_2,

        //triangle UC1W
        ...leaf_1.point_u, ...leaf_1.color_point_2,
        ...leaf_1.point_c1, ...leaf_1.color_point_2,
        ...leaf_1.point_w, ...leaf_1.color_point_2,

        //960

        //Right Object
        //triangle K2L2M2
        ...leaf_2.point_k2, ...leaf_2.color_point_3,
        ...leaf_2.point_l2, ...leaf_2.color_point_3,
        ...leaf_2.point_m2, ...leaf_2.color_point_3,

        //triangle A5L2M2
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_l2, ...leaf_2.color_point_3,
        ...leaf_2.point_m2, ...leaf_2.color_point_3,

        //1020

        //triangle A5P3M2
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_p3, ...leaf_2.color_point_3,
        ...leaf_2.point_m2, ...leaf_2.color_point_3,

        //triangle Q3W4L2
        ...leaf_2.point_q3, ...leaf_2.color_point_3,
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_l2, ...leaf_2.color_point_3,

        //1050

        //triangle A5P3O3
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_p3, ...leaf_2.color_point_3,
        ...leaf_2.point_o3, ...leaf_2.color_point_3,

        //triangle A5B5O3
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_o3, ...leaf_2.color_point_3,

        //1080

        //triangle N3B5O3
        ...leaf_2.point_n3, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_o3, ...leaf_2.color_point_3,

        //triangle N3B5M3
        ...leaf_2.point_n3, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_m3, ...leaf_2.color_point_3,

        //1110

        //triangle L3B5M3
        ...leaf_2.point_l3, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_m3, ...leaf_2.color_point_3,

        //triangle Q3W4R3
        ...leaf_2.point_q3, ...leaf_2.color_point_3,
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_r3, ...leaf_2.color_point_3,

        //1140

        //triangle S3W4R3
        ...leaf_2.point_s3, ...leaf_2.color_point_3,
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_r3, ...leaf_2.color_point_3,

        //triangle S3W4V4
        ...leaf_2.point_s3, ...leaf_2.color_point_3,
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //1170

        //triangle S3T3V4
        ...leaf_2.point_s3, ...leaf_2.color_point_3,
        ...leaf_2.point_t3, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //triangle U3T3V4
        ...leaf_2.point_u3, ...leaf_2.color_point_3,
        ...leaf_2.point_t3, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //1200

        //triangle L3C5B5
        ...leaf_2.point_l3, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,

        //triangle L3C5K3
        ...leaf_2.point_l3, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_k3, ...leaf_2.color_point_3,

        //1230

        //triangle J3C5K3
        ...leaf_2.point_j3, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_k3, ...leaf_2.color_point_3,

        //triangle J3C5I3
        ...leaf_2.point_j3, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_i3, ...leaf_2.color_point_3,

        //1260

        //triangle D5C5I3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_i3, ...leaf_2.color_point_3,

        //triangle D5H3I3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_h3, ...leaf_2.color_point_3,
        ...leaf_2.point_i3, ...leaf_2.color_point_3,

        //1290

        //triangle D5H3G3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_h3, ...leaf_2.color_point_3,
        ...leaf_2.point_g3, ...leaf_2.color_point_3,

        //triangle U3V3V4
        ...leaf_2.point_u3, ...leaf_2.color_point_3,
        ...leaf_2.point_v3, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //1320

        //triangle W3V3V4
        ...leaf_2.point_w3, ...leaf_2.color_point_3,
        ...leaf_2.point_v3, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //triangle W3U4V4
        ...leaf_2.point_w3, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,

        //1350

        //triangle W3U4Z3
        ...leaf_2.point_w3, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_z3, ...leaf_2.color_point_3,

        //triangle A4U4Z3
        ...leaf_2.point_a4, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_z3, ...leaf_2.color_point_3,

        //1380

        //triangle A4U4B4
        ...leaf_2.point_a4, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_b4, ...leaf_2.color_point_3,

        //triangle C4U4B4
        ...leaf_2.point_c4, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_b4, ...leaf_2.color_point_3,

        //1410

        //triangle C4U4T4
        ...leaf_2.point_c4, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_t4, ...leaf_2.color_point_3,

        //triangle C4D4T4
        ...leaf_2.point_c4, ...leaf_2.color_point_3,
        ...leaf_2.point_d4, ...leaf_2.color_point_3,
        ...leaf_2.point_t4, ...leaf_2.color_point_3,

        //1440
        
        //triangle E4D4T4
        ...leaf_2.point_e4, ...leaf_2.color_point_3,
        ...leaf_2.point_d4, ...leaf_2.color_point_3,
        ...leaf_2.point_t4, ...leaf_2.color_point_3,

        //triangle D5F3G3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_f3, ...leaf_2.color_point_3,
        ...leaf_2.point_g3, ...leaf_2.color_point_3,

        //1470

        //triangle D5F3E3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_f3, ...leaf_2.color_point_3,
        ...leaf_2.point_e3, ...leaf_2.color_point_3,

        //triangle D5D3E3
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_d3, ...leaf_2.color_point_3,
        ...leaf_2.point_e3, ...leaf_2.color_point_3,

        //1500

        //triangle D5D3E5
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_d3, ...leaf_2.color_point_3,
        ...leaf_2.point_e5, ...leaf_2.color_point_3,

        //triangle E4P4T4
        ...leaf_2.point_e4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_t4, ...leaf_2.color_point_3,

        //1530

        //triangle E4P4F4
        ...leaf_2.point_e4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_f4, ...leaf_2.color_point_3,

        //triangle G4P4F4
        ...leaf_2.point_g4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_f4, ...leaf_2.color_point_3,

        //1560

        //triangle G4P4H4
        ...leaf_2.point_g4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_h4, ...leaf_2.color_point_3,

        //triangle O4P4H4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_h4, ...leaf_2.color_point_3,

        //1590

        //triangle O4I4H4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_i4, ...leaf_2.color_point_3,
        ...leaf_2.point_h4, ...leaf_2.color_point_3,

        //triangle C3D3E5
        ...leaf_2.point_c3, ...leaf_2.color_point_3,
        ...leaf_2.point_d3, ...leaf_2.color_point_3,
        ...leaf_2.point_e5, ...leaf_2.color_point_3,

        //1620

        //triangle C3R4E5
        ...leaf_2.point_c3, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_e5, ...leaf_2.color_point_3,

        //triangle C3R4B3
        ...leaf_2.point_c3, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_b3, ...leaf_2.color_point_3,

        //1650

        //triangle A3R4B3
        ...leaf_2.point_a3, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_b3, ...leaf_2.color_point_3,

        //triangle A3R4Z2
        ...leaf_2.point_a3, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_z2, ...leaf_2.color_point_3,

        //1680

        //triangle S4R4Z2
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_z2, ...leaf_2.color_point_3,

        //triangle S4W2Z2
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_w2, ...leaf_2.color_point_3,
        ...leaf_2.point_z2, ...leaf_2.color_point_3,

        //1710

        //triangle S4W2V2
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_w2, ...leaf_2.color_point_3,
        ...leaf_2.point_v2, ...leaf_2.color_point_3,

        //triangle S4Q4V2
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,
        ...leaf_2.point_v2, ...leaf_2.color_point_3,

        //1740

        //triangle U2Q4V2
        ...leaf_2.point_u2, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,
        ...leaf_2.point_v2, ...leaf_2.color_point_3,

        //triangle U2Q4T2
        ...leaf_2.point_u2, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,
        ...leaf_2.point_t2, ...leaf_2.color_point_3,

        //1770

        //triangle S2Q4T2
        ...leaf_2.point_s2, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,
        ...leaf_2.point_t2, ...leaf_2.color_point_3,

        //triangle S2Q2T2
        ...leaf_2.point_s2, ...leaf_2.color_point_3,
        ...leaf_2.point_q2, ...leaf_2.color_point_3,
        ...leaf_2.point_t2, ...leaf_2.color_point_3,

        //1800

        //triangle O4I4J4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_i4, ...leaf_2.color_point_3,
        ...leaf_2.point_j4, ...leaf_2.color_point_3,

        //triangle O4K4J4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_k4, ...leaf_2.color_point_3,
        ...leaf_2.point_j4, ...leaf_2.color_point_3,

        //1830

        //triangle O4K4N4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_k4, ...leaf_2.color_point_3,
        ...leaf_2.point_n4, ...leaf_2.color_point_3,

        //triangle L4K4N4
        ...leaf_2.point_l4, ...leaf_2.color_point_3,
        ...leaf_2.point_k4, ...leaf_2.color_point_3,
        ...leaf_2.point_n4, ...leaf_2.color_point_3,

        //1860

        //triangle L4M4N4
        ...leaf_2.point_l4, ...leaf_2.color_point_3,
        ...leaf_2.point_m4, ...leaf_2.color_point_3,
        ...leaf_2.point_n4, ...leaf_2.color_point_3,

        //triangle R2M4N4
        ...leaf_2.point_r2, ...leaf_2.color_point_3,
        ...leaf_2.point_m4, ...leaf_2.color_point_3,
        ...leaf_2.point_n4, ...leaf_2.color_point_3,

        //1890

        //triangle R2M4O2
        ...leaf_2.point_r2, ...leaf_2.color_point_3,
        ...leaf_2.point_m4, ...leaf_2.color_point_3,
        ...leaf_2.point_o2, ...leaf_2.color_point_3,

        //triangle R2P2O2
        ...leaf_2.point_r2, ...leaf_2.color_point_3,
        ...leaf_2.point_p2, ...leaf_2.color_point_3,
        ...leaf_2.point_o2, ...leaf_2.color_point_3,

        //1920

        //triangle P2S2Q2
        ...leaf_2.point_p2, ...leaf_2.color_point_3,
        ...leaf_2.point_s2, ...leaf_2.color_point_3,
        ...leaf_2.point_q2, ...leaf_2.color_point_3,

        //triangle P2S2R2
        ...leaf_2.point_p2, ...leaf_2.color_point_3,
        ...leaf_2.point_s2, ...leaf_2.color_point_3,
        ...leaf_2.point_r2, ...leaf_2.color_point_3,

        //1950

        //triangle N2P2O2
        ...leaf_2.point_n2, ...leaf_2.color_point_3,
        ...leaf_2.point_p2, ...leaf_2.color_point_3,
        ...leaf_2.point_o2, ...leaf_2.color_point_3,

        //Leaf Bone
        //triangle R2S2Q4
        ...leaf_2.point_r2, ...leaf_2.color_point_4,
        ...leaf_2.point_s2, ...leaf_2.color_point_4,
        ...leaf_2.point_q4, ...leaf_2.color_point_4,

        //1980

        //triangle R2N4Q4
        ...leaf_2.point_r2, ...leaf_2.color_point_4,
        ...leaf_2.point_n4, ...leaf_2.color_point_4,
        ...leaf_2.point_q4, ...leaf_2.color_point_4,

        //triangle R2N4Q4
        ...leaf_2.point_r2, ...leaf_2.color_point_4,
        ...leaf_2.point_n4, ...leaf_2.color_point_4,
        ...leaf_2.point_q4, ...leaf_2.color_point_4,

        //2010

        //triangle S4N4Q4
        ...leaf_2.point_s4, ...leaf_2.color_point_4,
        ...leaf_2.point_n4, ...leaf_2.color_point_4,
        ...leaf_2.point_q4, ...leaf_2.color_point_4,

        //triangle S4N4O4
        ...leaf_2.point_s4, ...leaf_2.color_point_4,
        ...leaf_2.point_n4, ...leaf_2.color_point_4,
        ...leaf_2.point_o4, ...leaf_2.color_point_4,

        //2040

        //triangle S4R4O4
        ...leaf_2.point_s4, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,
        ...leaf_2.point_o4, ...leaf_2.color_point_4,

        //triangle P4R4O4
        ...leaf_2.point_p4, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,
        ...leaf_2.point_o4, ...leaf_2.color_point_4,

        //2070

        //triangle P4R4E5
        ...leaf_2.point_p4, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,
        ...leaf_2.point_e5, ...leaf_2.color_point_4,

        //triangle P4T4E5
        ...leaf_2.point_p4, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,
        ...leaf_2.point_e5, ...leaf_2.color_point_4,

        //2100

        //triangle D5T4E5
        ...leaf_2.point_d5, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,
        ...leaf_2.point_e5, ...leaf_2.color_point_4,

        //triangle D5T4U4
        ...leaf_2.point_d5, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,
        ...leaf_2.point_u4, ...leaf_2.color_point_4,

        //2130

        //triangle D5C5U4
        ...leaf_2.point_d5, ...leaf_2.color_point_4,
        ...leaf_2.point_c5, ...leaf_2.color_point_4,
        ...leaf_2.point_u4, ...leaf_2.color_point_4,

        //triangle V4C5U4
        ...leaf_2.point_v4, ...leaf_2.color_point_4,
        ...leaf_2.point_c5, ...leaf_2.color_point_4,
        ...leaf_2.point_u4, ...leaf_2.color_point_4,

        //2160

        //triangle V4C5B5
        ...leaf_2.point_v4, ...leaf_2.color_point_4,
        ...leaf_2.point_c5, ...leaf_2.color_point_4,
        ...leaf_2.point_b5, ...leaf_2.color_point_4,

        //triangle V4W4B5
        ...leaf_2.point_v4, ...leaf_2.color_point_4,
        ...leaf_2.point_w4, ...leaf_2.color_point_4,
        ...leaf_2.point_b5, ...leaf_2.color_point_4,

        //2190

        //triangle V4W4B5
        ...leaf_2.point_a5, ...leaf_2.color_point_4,
        ...leaf_2.point_w4, ...leaf_2.color_point_4,
        ...leaf_2.point_b5, ...leaf_2.color_point_4,

        //triangle V4W4L2
        ...leaf_2.point_a5, ...leaf_2.color_point_4,
        ...leaf_2.point_w4, ...leaf_2.color_point_4,
        ...leaf_2.point_l2, ...leaf_2.color_point_4,

        //2220
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
        if (change < -0.9 || change > 0.9) {
            speed = speed * -1;
        }

        for (let i = 991; i < vertices.length; i += 5) {
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
        var nVertex = 445;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}

