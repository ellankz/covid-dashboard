const data = {
  Historical: {
    Global: {
      cases: {
        '1/22/20': 555, '1/23/20': 654, '1/24/20': 941, '1/25/20': 1434, '1/26/20': 2118, '1/27/20': 2927, '1/28/20': 5578, '1/29/20': 6167, '1/30/20': 8235, '1/31/20': 9927, '2/1/20': 12038, '2/2/20': 16787, '2/3/20': 19887, '2/4/20': 23898, '2/5/20': 27643, '2/6/20': 30803, '2/7/20': 34396, '2/8/20': 37130, '2/9/20': 40160, '2/10/20': 42769, '2/11/20': 44811, '2/12/20': 45229, '2/13/20': 60382, '2/14/20': 66909, '2/15/20': 69051, '2/16/20': 71235, '2/17/20': 73270, '2/18/20': 75152, '2/19/20': 75652, '2/20/20': 76212, '2/21/20': 76841, '2/22/20': 78602, '2/23/20': 78982, '2/24/20': 79546, '2/25/20': 80399, '2/26/20': 81376, '2/27/20': 82736, '2/28/20': 84123, '2/29/20': 86013, '3/1/20': 88394, '3/2/20': 90377, '3/3/20': 92963, '3/4/20': 95279, '3/5/20': 98044, '3/6/20': 102043, '3/7/20': 106109, '3/8/20': 110058, '3/9/20': 114027, '3/10/20': 119052, '3/11/20': 126702, '3/12/20': 132492, '3/13/20': 146879, '3/14/20': 157952, '3/15/20': 169222, '3/16/20': 184032, '3/17/20': 199976, '3/18/20': 219535, '3/19/20': 246584, '3/20/20': 277361, '3/21/20': 309363, '3/22/20': 343679, '3/23/20': 387045, '3/24/20': 428455, '3/25/20': 479489, '3/26/20': 542352, '3/27/20': 607469, '3/28/20': 674773, '3/29/20': 734025, '3/30/20': 799411, '3/31/20': 876288, '4/1/20': 952799, '4/2/20': 1034089, '4/3/20': 1117368, '4/4/20': 1197751, '4/5/20': 1269728, '4/6/20': 1342938, '4/7/20': 1420723, '4/8/20': 1505115, '4/9/20': 1591308, '4/10/20': 1678725, '4/11/20': 1754891, '4/12/20': 1850360, '4/13/20': 1920520, '4/14/20': 1991778, '4/15/20': 2073664, '4/16/20': 2170502, '4/17/20': 2258252, '4/18/20': 2331730, '4/19/20': 2411760, '4/20/20': 2486338, '4/21/20': 2562292, '4/22/20': 2639997, '4/23/20': 2727920, '4/24/20': 2812308, '4/25/20': 2895700, '4/26/20': 2967573, '4/27/20': 3037307, '4/28/20': 3112773, '4/29/20': 3190203, '4/30/20': 3273574, '5/1/20': 3360772, '5/2/20': 3440772, '5/3/20': 3517290, '5/4/20': 3594385, '5/5/20': 3674853, '5/6/20': 3764797, '5/7/20': 3853808, '5/8/20': 3944935, '5/9/20': 4029856, '5/10/20': 4105084, '5/11/20': 4181990, '5/12/20': 4266257, '5/13/20': 4351117, '5/14/20': 4447724, '5/15/20': 4544111, '5/16/20': 4638322, '5/17/20': 4715953, '5/18/20': 4804660, '5/19/20': 4901910, '5/20/20': 5004285, '5/21/20': 5111091, '5/22/20': 5217070, '5/23/20': 5321646, '5/24/20': 5416049, '5/25/20': 5502479, '5/26/20': 5595745, '5/27/20': 5698752, '5/28/20': 5818252, '5/29/20': 5939196, '5/30/20': 6076190, '5/31/20': 6182739, '6/1/20': 6277899, '6/2/20': 6399361, '6/3/20': 6517569, '6/4/20': 6644525, '6/5/20': 6775668, '6/6/20': 6910017, '6/7/20': 7021891, '6/8/20': 7124396, '6/9/20': 7249171, '6/10/20': 7383937, '6/11/20': 7521941, '6/12/20': 7650546, '6/13/20': 7785982, '6/14/20': 7918439, '6/15/20': 8037804, '6/16/20': 8179644, '6/17/20': 8322779, '6/18/20': 8462906, '6/19/20': 8642483, '6/20/20': 8799337, '6/21/20': 8927572, '6/22/20': 9065725, '6/23/20': 9231558, '6/24/20': 9402525, '6/25/20': 9580790, '6/26/20': 9772323, '6/27/20': 9949686, '6/28/20': 10112687, '6/29/20': 10268359, '6/30/20': 10442416, '7/1/20': 10659787, '7/2/20': 10868757, '7/3/20': 11070703, '7/4/20': 11264129, '7/5/20': 11446765, '7/6/20': 11612269, '7/7/20': 11823759, '7/8/20': 12036715, '7/9/20': 12264379, '7/10/20': 12496804, '7/11/20': 12713063, '7/12/20': 12905924, '7/13/20': 13097460, '7/14/20': 13318975, '7/15/20': 13550258, '7/16/20': 13802734, '7/17/20': 14044855, '7/18/20': 14280992, '7/19/20': 14494710, '7/20/20': 14701074, '7/21/20': 14934500, '7/22/20': 15215944, '7/23/20': 15498570, '7/24/20': 15779600, '7/25/20': 16034121, '7/26/20': 16247118, '7/27/20': 16472797, '7/28/20': 16725051, '7/29/20': 17015219, '7/30/20': 17295467, '7/31/20': 17586976, '8/1/20': 17836946, '8/2/20': 18068553, '8/3/20': 18270705, '8/4/20': 18529528, '8/5/20': 18804369, '8/6/20': 19090775, '8/7/20': 19373623, '8/8/20': 19632377, '8/9/20': 19857674, '8/10/20': 20084105, '8/11/20': 20339245, '8/12/20': 20618786, '8/13/20': 20905739, '8/14/20': 21211536, '8/15/20': 21459152, '8/16/20': 21672643, '8/17/20': 21883103, '8/18/20': 22139250, '8/19/20': 22415130, '8/20/20': 22682946, '8/21/20': 22953944, '8/22/20': 23218851, '8/23/20': 23425580, '8/24/20': 23650734, '8/25/20': 23894266, '8/26/20': 24183536, '8/27/20': 24462137, '8/28/20': 24745572, '8/29/20': 25006697, '8/30/20': 25233590, '8/31/20': 25496276, '9/1/20': 25760886, '9/2/20': 26044328, '9/3/20': 26325367, '9/4/20': 26639353, '9/5/20': 26900802, '9/6/20': 27124613, '9/7/20': 27358093, '9/8/20': 27599516, '9/9/20': 27885143, '9/10/20': 28184232, '9/11/20': 28505356, '9/12/20': 28781443, '9/13/20': 29017909, '9/14/20': 29297658, '9/15/20': 29583230, '9/16/20': 29886975, '9/17/20': 30201795, '9/18/20': 30527095, '9/19/20': 30806206, '9/20/20': 31047802, '9/21/20': 31347093, '9/22/20': 31631448, '9/23/20': 31894840, '9/24/20': 32258492, '9/25/20': 32589165, '9/26/20': 32863083, '9/27/20': 33103927, '9/28/20': 33378945, '9/29/20': 33664892, '9/30/20': 33992519, '10/1/20': 34310425, '10/2/20': 34607721, '10/3/20': 34923533, '10/4/20': 35172808, '10/5/20': 35502340, '10/6/20': 35827693, '10/7/20': 36177200, '10/8/20': 36538959, '10/9/20': 36899092, '10/10/20': 37228551, '10/11/20': 37499667, '10/12/20': 37824416, '10/13/20': 38152984, '10/14/20': 38534142, '10/15/20': 38941463, '10/16/20': 39352246, '10/17/20': 39693045, '10/18/20': 39979780, '10/19/20': 40427940, '10/20/20': 40816517, '10/21/20': 41260768, '10/22/20': 41733353, '10/23/20': 42229019, '10/24/20': 42640647, '10/25/20': 42994229, '10/26/20': 43531804, '10/27/20': 44001138, '10/28/20': 44510550, '10/29/20': 45061433, '10/30/20': 45631609, '10/31/20': 46107714, '11/1/20': 46541340, '11/2/20': 47049933, '11/3/20': 47564953, '11/4/20': 48162679, '11/5/20': 48756545, '11/6/20': 49398859, '11/7/20': 49909717, '11/8/20': 50475384, '11/9/20': 50976830, '11/10/20': 51532970, '11/11/20': 52178378, '11/12/20': 52825714, '11/13/20': 53474837, '11/14/20': 54068774, '11/15/20': 54542427, '11/16/20': 55071490, '11/17/20': 55679709, '11/18/20': 56303781, '11/19/20': 56954548, '11/20/20': 57620406, '11/21/20': 58206741, '11/22/20': 58691014, '11/23/20': 59212713, '11/24/20': 59801016, '11/25/20': 60434061, '11/26/20': 61015375, '11/27/20': 61687693, '11/28/20': 62286394, '11/29/20': 62773072, '11/30/20': 63278982, '12/1/20': 63883941, '12/2/20': 64530509, '12/3/20': 65221032, '12/4/20': 65899348, '12/5/20': 66539932, '12/6/20': 67073603, '12/7/20': 67591193, '12/8/20': 68225587,
      },
      deaths: {
        '1/22/20': 17, '1/23/20': 18, '1/24/20': 26, '1/25/20': 42, '1/26/20': 56, '1/27/20': 82, '1/28/20': 131, '1/29/20': 133, '1/30/20': 171, '1/31/20': 213, '2/1/20': 259, '2/2/20': 362, '2/3/20': 426, '2/4/20': 492, '2/5/20': 564, '2/6/20': 634, '2/7/20': 719, '2/8/20': 806, '2/9/20': 906, '2/10/20': 1013, '2/11/20': 1113, '2/12/20': 1118, '2/13/20': 1371, '2/14/20': 1523, '2/15/20': 1666, '2/16/20': 1770, '2/17/20': 1868, '2/18/20': 2008, '2/19/20': 2123, '2/20/20': 2248, '2/21/20': 2252, '2/22/20': 2459, '2/23/20': 2470, '2/24/20': 2630, '2/25/20': 2710, '2/26/20': 2771, '2/27/20': 2814, '2/28/20': 2873, '2/29/20': 2942, '3/1/20': 2996, '3/2/20': 3085, '3/3/20': 3160, '3/4/20': 3255, '3/5/20': 3348, '3/6/20': 3460, '3/7/20': 3559, '3/8/20': 3803, '3/9/20': 3987, '3/10/20': 4267, '3/11/20': 4611, '3/12/20': 4917, '3/13/20': 5414, '3/14/20': 5834, '3/15/20': 6475, '3/16/20': 7153, '3/17/20': 7964, '3/18/20': 8867, '3/19/20': 9980, '3/20/20': 11459, '3/21/20': 13181, '3/22/20': 14855, '3/23/20': 16797, '3/24/20': 19082, '3/25/20': 21881, '3/26/20': 24902, '3/27/20': 28393, '3/28/20': 32109, '3/29/20': 35585, '3/30/20': 39637, '3/31/20': 44389, '4/1/20': 49897, '4/2/20': 56132, '4/3/20': 62242, '4/4/20': 68409, '4/5/20': 73580, '4/6/20': 79526, '4/7/20': 87754, '4/8/20': 94514, '4/9/20': 102274, '4/10/20': 109675, '4/11/20': 115902, '4/12/20': 121726, '4/13/20': 127630, '4/14/20': 134609, '4/15/20': 142964, '4/16/20': 150251, '4/17/20': 158618, '4/18/20': 164638, '4/19/20': 169899, '4/20/20': 175758, '4/21/20': 182945, '4/22/20': 189674, '4/23/20': 196511, '4/24/20': 203177, '4/25/20': 208812, '4/26/20': 212753, '4/27/20': 217426, '4/28/20': 223972, '4/29/20': 230707, '4/30/20': 236701, '5/1/20': 241851, '5/2/20': 247328, '5/3/20': 250800, '5/4/20': 254899, '5/5/20': 260785, '5/6/20': 267328, '5/7/20': 272620, '5/8/20': 278101, '5/9/20': 282389, '5/10/20': 285982, '5/11/20': 289449, '5/12/20': 294972, '5/13/20': 300048, '5/14/20': 305230, '5/15/20': 310345, '5/16/20': 314522, '5/17/20': 317808, '5/18/20': 321501, '5/19/20': 326221, '5/20/20': 330982, '5/21/20': 335707, '5/22/20': 340902, '5/23/20': 344818, '5/24/20': 347941, '5/25/20': 349142, '5/26/20': 353261, '5/27/20': 358399, '5/28/20': 363020, '5/29/20': 367607, '5/30/20': 371672, '5/31/20': 374647, '6/1/20': 377727, '6/2/20': 382450, '6/3/20': 387886, '6/4/20': 393002, '6/5/20': 397569, '6/6/20': 401419, '6/7/20': 404162, '6/8/20': 407841, '6/9/20': 412676, '6/10/20': 417736, '6/11/20': 422417, '6/12/20': 426632, '6/13/20': 430824, '6/14/20': 434238, '6/15/20': 437655, '6/16/20': 444374, '6/17/20': 449462, '6/18/20': 454442, '6/19/20': 460593, '6/20/20': 464796, '6/21/20': 468804, '6/22/20': 472358, '6/23/20': 477581, '6/24/20': 482755, '6/25/20': 487451, '6/26/20': 492151, '6/27/20': 496628, '6/28/20': 499766, '6/29/20': 503489, '6/30/20': 508437, '7/1/20': 513366, '7/2/20': 518424, '7/3/20': 523360, '7/4/20': 527729, '7/5/20': 531203, '7/6/20': 535035, '7/7/20': 541047, '7/8/20': 546324, '7/9/20': 551732, '7/10/20': 557025, '7/11/20': 561815, '7/12/20': 565806, '7/13/20': 569647, '7/14/20': 575225, '7/15/20': 580650, '7/16/20': 586410, '7/17/20': 593071, '7/18/20': 598685, '7/19/20': 602745, '7/20/20': 606927, '7/21/20': 613091, '7/22/20': 620018, '7/23/20': 629917, '7/24/20': 635952, '7/25/20': 641484, '7/26/20': 645154, '7/27/20': 650331, '7/28/20': 656634, '7/29/20': 663216, '7/30/20': 669245, '7/31/20': 675450, '8/1/20': 680926, '8/2/20': 685232, '8/3/20': 689847, '8/4/20': 696495, '8/5/20': 703468, '8/6/20': 709959, '8/7/20': 716264, '8/8/20': 721693, '8/9/20': 726256, '8/10/20': 731483, '8/11/20': 737710, '8/12/20': 744328, '8/13/20': 750543, '8/14/20': 760677, '8/15/20': 766064, '8/16/20': 770280, '8/17/20': 774423, '8/18/20': 781312, '8/19/20': 788001, '8/20/20': 794034, '8/21/20': 799538, '8/22/20': 805117, '8/23/20': 808980, '8/24/20': 813457, '8/25/20': 819732, '8/26/20': 826018, '8/27/20': 831906, '8/28/20': 837423, '8/29/20': 842677, '8/30/20': 846715, '8/31/20': 850931, '9/1/20': 857383, '9/2/20': 863468, '9/3/20': 869185, '9/4/20': 875107, '9/5/20': 880040, '9/6/20': 883824, '9/7/20': 893156, '9/8/20': 898060, '9/9/20': 904187, '9/10/20': 909980, '9/11/20': 915869, '9/12/20': 920749, '9/13/20': 924408, '9/14/20': 928853, '9/15/20': 935374, '9/16/20': 941182, '9/17/20': 946654, '9/18/20': 952351, '9/19/20': 957590, '9/20/20': 961296, '9/21/20': 965429, '9/22/20': 971398, '9/23/20': 977023, '9/24/20': 983721, '9/25/20': 989621, '9/26/20': 994907, '9/27/20': 998534, '9/28/20': 1002454, '9/29/20': 1008528, '9/30/20': 1014954, '10/1/20': 1023642, '10/2/20': 1028648, '10/3/20': 1033983, '10/4/20': 1037758, '10/5/20': 1044757, '10/6/20': 1050522, '10/7/20': 1056366, '10/8/20': 1062622, '10/9/20': 1068734, '10/10/20': 1073547, '10/11/20': 1077476, '10/12/20': 1081407, '10/13/20': 1086847, '10/14/20': 1092883, '10/15/20': 1098989, '10/16/20': 1105133, '10/17/20': 1110633, '10/18/20': 1114036, '10/19/20': 1119014, '10/20/20': 1125584, '10/21/20': 1132219, '10/22/20': 1138100, '10/23/20': 1145049, '10/24/20': 1150727, '10/25/20': 1154877, '10/26/20': 1160480, '10/27/20': 1167857, '10/28/20': 1174974, '10/29/20': 1182032, '10/30/20': 1189592, '10/31/20': 1196134, '11/1/20': 1201063, '11/2/20': 1207133, '11/3/20': 1215632, '11/4/20': 1226662, '11/5/20': 1234685, '11/6/20': 1244300, '11/7/20': 1251837, '11/8/20': 1257588, '11/9/20': 1264699, '11/10/20': 1274682, '11/11/20': 1285071, '11/12/20': 1294856, '11/13/20': 1304409, '11/14/20': 1313401, '11/15/20': 1319661, '11/16/20': 1327516, '11/17/20': 1338608, '11/18/20': 1349935, '11/19/20': 1360916, '11/20/20': 1372754, '11/21/20': 1381538, '11/22/20': 1388598, '11/23/20': 1396912, '11/24/20': 1409690, '11/25/20': 1421747, '11/26/20': 1432488, '11/27/20': 1443109, '11/28/20': 1452851, '11/29/20': 1459770, '11/30/20': 1468457, '12/1/20': 1481305, '12/2/20': 1493741, '12/3/20': 1506259, '12/4/20': 1518669, '12/5/20': 1528867, '12/6/20': 1536055, '12/7/20': 1544532, '12/8/20': 1556834,
      },
      recovered: {
        '1/22/20': 28, '1/23/20': 30, '1/24/20': 36, '1/25/20': 39, '1/26/20': 52, '1/27/20': 61, '1/28/20': 107, '1/29/20': 126, '1/30/20': 143, '1/31/20': 222, '2/1/20': 284, '2/2/20': 472, '2/3/20': 623, '2/4/20': 852, '2/5/20': 1124, '2/6/20': 1487, '2/7/20': 2011, '2/8/20': 2616, '2/9/20': 3244, '2/10/20': 3946, '2/11/20': 4683, '2/12/20': 5149, '2/13/20': 6294, '2/14/20': 8057, '2/15/20': 9394, '2/16/20': 10864, '2/17/20': 12582, '2/18/20': 14351, '2/19/20': 16120, '2/20/20': 18176, '2/21/20': 18887, '2/22/20': 22883, '2/23/20': 23391, '2/24/20': 25224, '2/25/20': 27902, '2/26/20': 30381, '2/27/20': 33270, '2/28/20': 36704, '2/29/20': 39775, '3/1/20': 42709, '3/2/20': 45595, '3/3/20': 48221, '3/4/20': 51163, '3/5/20': 53789, '3/6/20': 55857, '3/7/20': 58349, '3/8/20': 60684, '3/9/20': 62483, '3/10/20': 64392, '3/11/20': 66990, '3/12/20': 68312, '3/13/20': 70240, '3/14/20': 72611, '3/15/20': 76021, '3/16/20': 78074, '3/17/20': 80821, '3/18/20': 83307, '3/19/20': 84949, '3/20/20': 87393, '3/21/20': 91638, '3/22/20': 97857, '3/23/20': 98326, '3/24/20': 107860, '3/25/20': 113571, '3/26/20': 121942, '3/27/20': 130655, '3/28/20': 138953, '3/29/20': 148398, '3/30/20': 163857, '3/31/20': 176219, '4/1/20': 191848, '4/2/20': 208491, '4/3/20': 223504, '4/4/20': 243545, '4/5/20': 257003, '4/6/20': 273350, '4/7/20': 296141, '4/8/20': 324595, '4/9/20': 348840, '4/10/20': 369931, '4/11/20': 395447, '4/12/20': 414339, '4/13/20': 440962, '4/14/20': 465582, '4/15/20': 501400, '4/16/20': 531584, '4/17/20': 556928, '4/18/20': 580368, '4/19/20': 611250, '4/20/20': 632708, '4/21/20': 666864, '4/22/20': 695726, '4/23/20': 724150, '4/24/20': 773846, '4/25/20': 800693, '4/26/20': 828564, '4/27/20': 855027, '4/28/20': 887272, '4/29/20': 928224, '4/30/20': 992218, '5/1/20': 1029005, '5/2/20': 1068615, '5/3/20': 1100002, '5/4/20': 1132953, '5/5/20': 1168444, '5/6/20': 1213382, '5/7/20': 1251798, '5/8/20': 1287228, '5/9/20': 1339692, '5/10/20': 1372632, '5/11/20': 1418605, '5/12/20': 1454593, '5/13/20': 1509381, '5/14/20': 1548131, '5/15/20': 1595414, '5/16/20': 1650901, '5/17/20': 1691172, '5/18/20': 1743378, '5/19/20': 1794622, '5/20/20': 1852885, '5/21/20': 1903159, '5/22/20': 2010887, '5/23/20': 2065024, '5/24/20': 2119866, '5/25/20': 2182913, '5/26/20': 2237376, '5/27/20': 2299822, '5/28/20': 2365975, '5/29/20': 2442316, '5/30/20': 2512162, '5/31/20': 2587852, '6/1/20': 2641895, '6/2/20': 2745378, '6/3/20': 2823688, '6/4/20': 2893076, '6/5/20': 2961374, '6/6/20': 3032576, '6/7/20': 3087094, '6/8/20': 3238024, '6/9/20': 3319521, '6/10/20': 3397616, '6/11/20': 3482566, '6/12/20': 3561405, '6/13/20': 3646490, '6/14/20': 3716492, '6/15/20': 3795956, '6/16/20': 3893383, '6/17/20': 4010829, '6/18/20': 4091480, '6/19/20': 4185938, '6/20/20': 4301288, '6/21/20': 4369552, '6/22/20': 4460707, '6/23/20': 4564350, '6/24/20': 4679708, '6/25/20': 4772247, '6/26/20': 4877919, '6/27/20': 4983939, '6/28/20': 5072894, '6/29/20': 5166464, '6/30/20': 5283381, '7/1/20': 5399018, '7/2/20': 5683479, '7/3/20': 5793005, '7/4/20': 5988491, '7/5/20': 6107584, '7/6/20': 6230905, '7/7/20': 6375652, '7/8/20': 6533320, '7/9/20': 6667657, '7/10/20': 6806730, '7/11/20': 6932111, '7/12/20': 7043768, '7/13/20': 7183661, '7/14/20': 7325573, '7/15/20': 7485036, '7/16/20': 7637161, '7/17/20': 7796733, '7/18/20': 7947369, '7/19/20': 8035298, '7/20/20': 8194015, '7/21/20': 8368436, '7/22/20': 8547918, '7/23/20': 8723712, '7/24/20': 8951448, '7/25/20': 9170998, '7/26/20': 9314094, '7/27/20': 9484997, '7/28/20': 9655216, '7/29/20': 9857512, '7/30/20': 10070674, '7/31/20': 10269716, '8/1/20': 10453448, '8/2/20': 10592035, '8/3/20': 10814398, '8/4/20': 11037281, '8/5/20': 11258654, '8/6/20': 11447161, '8/7/20': 11638757, '8/8/20': 11838883, '8/9/20': 12017492, '8/10/20': 12179052, '8/11/20': 12483704, '8/12/20': 12723984, '8/13/20': 12887460, '8/14/20': 13170294, '8/15/20': 13338629, '8/16/20': 13571310, '8/17/20': 13782090, '8/18/20': 14009050, '8/19/20': 14226582, '8/20/20': 14434123, '8/21/20': 14602050, '8/22/20': 14811738, '8/23/20': 15028048, '8/24/20': 15226845, '8/25/20': 15457972, '8/26/20': 15683297, '8/27/20': 15890131, '8/28/20': 16088836, '8/29/20': 16299989, '8/30/20': 16510053, '8/31/20': 16710290, '9/1/20': 16967803, '9/2/20': 17186606, '9/3/20': 17407550, '9/4/20': 17620575, '9/5/20': 17821370, '9/6/20': 18032911, '9/7/20': 18230238, '9/8/20': 18431021, '9/9/20': 18670919, '9/10/20': 18886486, '9/11/20': 19109453, '9/12/20': 19331977, '9/13/20': 19519489, '9/14/20': 19747101, '9/15/20': 19972720, '9/16/20': 20201567, '9/17/20': 20421183, '9/18/20': 20671653, '9/19/20': 20908302, '9/20/20': 21144742, '9/21/20': 21389094, '9/22/20': 21607376, '9/23/20': 21869831, '9/24/20': 22124748, '9/25/20': 22362832, '9/26/20': 22624438, '9/27/20': 22837343, '9/28/20': 23058514, '9/29/20': 23298587, '9/30/20': 23545370, '10/1/20': 23765550, '10/2/20': 23936584, '10/3/20': 24191302, '10/4/20': 24411642, '10/5/20': 24646926, '10/6/20': 24877783, '10/7/20': 25131591, '10/8/20': 25349215, '10/9/20': 25553661, '10/10/20': 25747276, '10/11/20': 25967856, '10/12/20': 26166889, '10/13/20': 26356043, '10/14/20': 26566450, '10/15/20': 26771633, '10/16/20': 26972465, '10/17/20': 27170652, '10/18/20': 27368754, '10/19/20': 27568507, '10/20/20': 27777880, '10/21/20': 27992450, '10/22/20': 28217342, '10/23/20': 28416843, '10/24/20': 28627061, '10/25/20': 28822043, '10/26/20': 29058229, '10/27/20': 29645701, '10/28/20': 29909302, '10/29/20': 30153577, '10/30/20': 30406498, '10/31/20': 30648904, '11/1/20': 30904973, '11/2/20': 31182504, '11/3/20': 31430396, '11/4/20': 31707504, '11/5/20': 32009436, '11/6/20': 32293786, '11/7/20': 32590981, '11/8/20': 32841918, '11/9/20': 33095159, '11/10/20': 33349009, '11/11/20': 33727457, '11/12/20': 33949284, '11/13/20': 34247354, '11/14/20': 34522962, '11/15/20': 34749095, '11/16/20': 35134838, '11/17/20': 35564073, '11/18/20': 35922990, '11/19/20': 36291856, '11/20/20': 36642787, '11/21/20': 36978192, '11/22/20': 37247020, '11/23/20': 37651889, '11/24/20': 38019545, '11/25/20': 38452830, '11/26/20': 38814264, '11/27/20': 39185435, '11/28/20': 39536385, '11/29/20': 39858863, '11/30/20': 40254750, '12/1/20': 40725369, '12/2/20': 41181781, '12/3/20': 41612833, '12/4/20': 42027211, '12/5/20': 42460195, '12/6/20': 42769444, '12/7/20': 43171417, '12/8/20': 43606545,
      },
    },
  },
  Global: {
    NewConfirmed: 634638,
    TotalConfirmed: 68215635,
    NewDeaths: 12347,
    TotalDeaths: 1556782,
    NewRecovered: 440823,
    TotalRecovered: 43948235,
  },
  Countries: {
    AF: {
      Country: 'Afghanistan', CountryCode: 'AF', Slug: 'afghanistan', NewConfirmed: 200, TotalConfirmed: 47716, NewDeaths: 6, TotalDeaths: 1906, NewRecovered: 41, TotalRecovered: 37920, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AL: {
      Country: 'Albania', CountryCode: 'AL', Slug: 'albania', NewConfirmed: 753, TotalConfirmed: 44436, NewDeaths: 14, TotalDeaths: 936, NewRecovered: 347, TotalRecovered: 22527, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DZ: {
      Country: 'Algeria', CountryCode: 'DZ', Slug: 'algeria', NewConfirmed: 591, TotalConfirmed: 89416, NewDeaths: 12, TotalDeaths: 2539, NewRecovered: 498, TotalRecovered: 58146, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AD: {
      Country: 'Andorra', CountryCode: 'AD', Slug: 'andorra', NewConfirmed: 43, TotalConfirmed: 7127, NewDeaths: 0, TotalDeaths: 78, NewRecovered: 74, TotalRecovered: 6367, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AO: {
      Country: 'Angola', CountryCode: 'AO', Slug: 'angola', NewConfirmed: 81, TotalConfirmed: 15729, NewDeaths: 1, TotalDeaths: 355, NewRecovered: 117, TotalRecovered: 8470, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AG: {
      Country: 'Antigua and Barbuda', CountryCode: 'AG', Slug: 'antigua-and-barbuda', NewConfirmed: 0, TotalConfirmed: 146, NewDeaths: 0, TotalDeaths: 4, NewRecovered: 0, TotalRecovered: 134, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AR: {
      Country: 'Argentina', CountryCode: 'AR', Slug: 'argentina', NewConfirmed: 3610, TotalConfirmed: 1469919, NewDeaths: 121, TotalDeaths: 40009, NewRecovered: 4891, TotalRecovered: 1305587, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AM: {
      Country: 'Armenia', CountryCode: 'AM', Slug: 'armenia', NewConfirmed: 584, TotalConfirmed: 142928, NewDeaths: 28, TotalDeaths: 2372, NewRecovered: 1498, TotalRecovered: 119147, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AU: {
      Country: 'Australia', CountryCode: 'AU', Slug: 'australia', NewConfirmed: 6, TotalConfirmed: 27993, NewDeaths: 0, TotalDeaths: 908, NewRecovered: 5, TotalRecovered: 25651, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AT: {
      Country: 'Austria', CountryCode: 'AT', Slug: 'austria', NewConfirmed: 2377, TotalConfirmed: 308070, NewDeaths: 105, TotalDeaths: 4002, NewRecovered: 5503, TotalRecovered: 262314, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AZ: {
      Country: 'Azerbaijan', CountryCode: 'AZ', Slug: 'azerbaijan', NewConfirmed: 4387, TotalConfirmed: 154152, NewDeaths: 38, TotalDeaths: 1713, NewRecovered: 3133, TotalRecovered: 93411, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BS: {
      Country: 'Bahamas', CountryCode: 'BS', Slug: 'bahamas', NewConfirmed: 0, TotalConfirmed: 7579, NewDeaths: 0, TotalDeaths: 163, NewRecovered: 0, TotalRecovered: 6003, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BH: {
      Country: 'Bahrain', CountryCode: 'BH', Slug: 'bahrain', NewConfirmed: 183, TotalConfirmed: 88294, NewDeaths: 2, TotalDeaths: 343, NewRecovered: 133, TotalRecovered: 86348, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BD: {
      Country: 'Bangladesh', CountryCode: 'BD', Slug: 'bangladesh', NewConfirmed: 2202, TotalConfirmed: 481945, NewDeaths: 32, TotalDeaths: 6906, NewRecovered: 2571, TotalRecovered: 401194, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BB: {
      Country: 'Barbados', CountryCode: 'BB', Slug: 'barbados', NewConfirmed: 2, TotalConfirmed: 289, NewDeaths: 0, TotalDeaths: 7, NewRecovered: 3, TotalRecovered: 263, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BY: {
      Country: 'Belarus', CountryCode: 'BY', Slug: 'belarus', NewConfirmed: 1649, TotalConfirmed: 150602, NewDeaths: 7, TotalDeaths: 1222, NewRecovered: 1444, TotalRecovered: 127528, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BE: {
      Country: 'Belgium', CountryCode: 'BE', Slug: 'belgium', NewConfirmed: 1957, TotalConfirmed: 594572, NewDeaths: 121, TotalDeaths: 17507, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BZ: {
      Country: 'Belize', CountryCode: 'BZ', Slug: 'belize', NewConfirmed: 60, TotalConfirmed: 8013, NewDeaths: 3, TotalDeaths: 179, NewRecovered: 69, TotalRecovered: 4012, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BJ: {
      Country: 'Benin', CountryCode: 'BJ', Slug: 'benin', NewConfirmed: 0, TotalConfirmed: 3073, NewDeaths: 0, TotalDeaths: 44, NewRecovered: 0, TotalRecovered: 2922, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BT: {
      Country: 'Bhutan', CountryCode: 'BT', Slug: 'bhutan', NewConfirmed: 1, TotalConfirmed: 433, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 3, TotalRecovered: 393, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BO: {
      Country: 'Bolivia', CountryCode: 'BO', Slug: 'bolivia', NewConfirmed: 189, TotalConfirmed: 145846, NewDeaths: 5, TotalDeaths: 9002, NewRecovered: 249, TotalRecovered: 125230, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BA: {
      Country: 'Bosnia and Herzegovina', CountryCode: 'BA', Slug: 'bosnia-and-herzegovina', NewConfirmed: 1077, TotalConfirmed: 96021, NewDeaths: 69, TotalDeaths: 3081, NewRecovered: 722, TotalRecovered: 60210, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BW: {
      Country: 'Botswana', CountryCode: 'BW', Slug: 'botswana', NewConfirmed: 0, TotalConfirmed: 12058, NewDeaths: 0, TotalDeaths: 36, NewRecovered: 0, TotalRecovered: 9400, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BR: {
      Country: 'Brazil', CountryCode: 'BR', Slug: 'brazil', NewConfirmed: 51088, TotalConfirmed: 6674999, NewDeaths: 842, TotalDeaths: 178159, NewRecovered: 67966, TotalRecovered: 5965492, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BN: {
      Country: 'Brunei Darussalam', CountryCode: 'BN', Slug: 'brunei', NewConfirmed: 1, TotalConfirmed: 152, NewDeaths: 0, TotalDeaths: 3, NewRecovered: 0, TotalRecovered: 147, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BG: {
      Country: 'Bulgaria', CountryCode: 'BG', Slug: 'bulgaria', NewConfirmed: 3980, TotalConfirmed: 168165, NewDeaths: 146, TotalDeaths: 5156, NewRecovered: 3412, TotalRecovered: 69028, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BF: {
      Country: 'Burkina Faso', CountryCode: 'BF', Slug: 'burkina-faso', NewConfirmed: 154, TotalConfirmed: 3469, NewDeaths: 1, TotalDeaths: 69, NewRecovered: 21, TotalRecovered: 2742, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    BI: {
      Country: 'Burundi', CountryCode: 'BI', Slug: 'burundi', NewConfirmed: 18, TotalConfirmed: 716, NewDeaths: 0, TotalDeaths: 1, NewRecovered: 0, TotalRecovered: 630, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KH: {
      Country: 'Cambodia', CountryCode: 'KH', Slug: 'cambodia', NewConfirmed: 4, TotalConfirmed: 354, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 307, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CM: {
      Country: 'Cameroon', CountryCode: 'CM', Slug: 'cameroon', NewConfirmed: 0, TotalConfirmed: 24752, NewDeaths: 0, TotalDeaths: 443, NewRecovered: 0, TotalRecovered: 23344, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CA: {
      Country: 'Canada', CountryCode: 'CA', Slug: 'canada', NewConfirmed: 6171, TotalConfirmed: 432717, NewDeaths: 91, TotalDeaths: 12886, NewRecovered: 5595, TotalRecovered: 349629, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CV: {
      Country: 'Cape Verde', CountryCode: 'CV', Slug: 'cape-verde', NewConfirmed: 20, TotalConfirmed: 11118, NewDeaths: 0, TotalDeaths: 109, NewRecovered: 36, TotalRecovered: 10712, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CF: {
      Country: 'Central African Republic', CountryCode: 'CF', Slug: 'central-african-republic', NewConfirmed: 5, TotalConfirmed: 4927, NewDeaths: 0, TotalDeaths: 63, NewRecovered: 0, TotalRecovered: 1924, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TD: {
      Country: 'Chad', CountryCode: 'TD', Slug: 'chad', NewConfirmed: 1, TotalConfirmed: 1729, NewDeaths: 0, TotalDeaths: 102, NewRecovered: 2, TotalRecovered: 1573, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CL: {
      Country: 'Chile', CountryCode: 'CL', Slug: 'chile', NewConfirmed: 1392, TotalConfirmed: 563534, NewDeaths: 17, TotalDeaths: 15680, NewRecovered: 1460, TotalRecovered: 537727, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CN: {
      Country: 'China', CountryCode: 'CN', Slug: 'china', NewConfirmed: 112, TotalConfirmed: 93782, NewDeaths: 0, TotalDeaths: 4746, NewRecovered: 79, TotalRecovered: 87483, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CO: {
      Country: 'Colombia', CountryCode: 'CO', Slug: 'colombia', NewConfirmed: 7510, TotalConfirmed: 1384610, NewDeaths: 163, TotalDeaths: 38158, NewRecovered: 10731, TotalRecovered: 1278326, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KM: {
      Country: 'Comoros', CountryCode: 'KM', Slug: 'comoros', NewConfirmed: 1, TotalConfirmed: 617, NewDeaths: 0, TotalDeaths: 7, NewRecovered: 5, TotalRecovered: 605, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CG: {
      Country: 'Congo (Brazzaville)', CountryCode: 'CG', Slug: 'congo-brazzaville', NewConfirmed: 0, TotalConfirmed: 5774, NewDeaths: 0, TotalDeaths: 94, NewRecovered: 0, TotalRecovered: 4988, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CD: {
      Country: 'Congo (Kinshasa)', CountryCode: 'CD', Slug: 'congo-kinshasa', NewConfirmed: 155, TotalConfirmed: 13750, NewDeaths: 0, TotalDeaths: 344, NewRecovered: 0, TotalRecovered: 12059, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CR: {
      Country: 'Costa Rica', CountryCode: 'CR', Slug: 'costa-rica', NewConfirmed: 1009, TotalConfirmed: 147430, NewDeaths: 21, TotalDeaths: 1846, NewRecovered: 2831, TotalRecovered: 105686, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    HR: {
      Country: 'Croatia', CountryCode: 'HR', Slug: 'croatia', NewConfirmed: 2613, TotalConfirmed: 154852, NewDeaths: 65, TotalDeaths: 2298, NewRecovered: 2987, TotalRecovered: 130869, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CU: {
      Country: 'Cuba', CountryCode: 'CU', Slug: 'cuba', NewConfirmed: 76, TotalConfirmed: 8982, NewDeaths: 0, TotalDeaths: 136, NewRecovered: 50, TotalRecovered: 8047, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CY: {
      Country: 'Cyprus', CountryCode: 'CY', Slug: 'cyprus', NewConfirmed: 419, TotalConfirmed: 13286, NewDeaths: 5, TotalDeaths: 68, NewRecovered: 0, TotalRecovered: 2057, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CZ: {
      Country: 'Czech Republic', CountryCode: 'CZ', Slug: 'czech-republic', NewConfirmed: 4237, TotalConfirmed: 551070, NewDeaths: 134, TotalDeaths: 9036, NewRecovered: 6687, TotalRecovered: 484781, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CI: {
      Country: "Côte d'Ivoire", CountryCode: 'CI', Slug: 'cote-divoire', NewConfirmed: 6, TotalConfirmed: 21513, NewDeaths: 0, TotalDeaths: 132, NewRecovered: 11, TotalRecovered: 21161, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DK: {
      Country: 'Denmark', CountryCode: 'DK', Slug: 'denmark', NewConfirmed: 2155, TotalConfirmed: 95332, NewDeaths: 7, TotalDeaths: 901, NewRecovered: 1171, TotalRecovered: 73572, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DJ: {
      Country: 'Djibouti', CountryCode: 'DJ', Slug: 'djibouti', NewConfirmed: 6, TotalConfirmed: 5714, NewDeaths: 0, TotalDeaths: 61, NewRecovered: 1, TotalRecovered: 5597, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DM: {
      Country: 'Dominica', CountryCode: 'DM', Slug: 'dominica', NewConfirmed: 0, TotalConfirmed: 85, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 72, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DO: {
      Country: 'Dominican Republic', CountryCode: 'DO', Slug: 'dominican-republic', NewConfirmed: 492, TotalConfirmed: 149630, NewDeaths: 1, TotalDeaths: 2347, NewRecovered: 402, TotalRecovered: 117804, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    EC: {
      Country: 'Ecuador', CountryCode: 'EC', Slug: 'ecuador', NewConfirmed: 508, TotalConfirmed: 198752, NewDeaths: 14, TotalDeaths: 13794, NewRecovered: 0, TotalRecovered: 174188, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    EG: {
      Country: 'Egypt', CountryCode: 'EG', Slug: 'egypt', NewConfirmed: 434, TotalConfirmed: 119281, NewDeaths: 23, TotalDeaths: 6813, NewRecovered: 210, TotalRecovered: 103913, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SV: {
      Country: 'El Salvador', CountryCode: 'SV', Slug: 'el-salvador', NewConfirmed: 206, TotalConfirmed: 40551, NewDeaths: 4, TotalDeaths: 1168, NewRecovered: 216, TotalRecovered: 36951, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GQ: {
      Country: 'Equatorial Guinea', CountryCode: 'GQ', Slug: 'equatorial-guinea', NewConfirmed: 0, TotalConfirmed: 5166, NewDeaths: 0, TotalDeaths: 85, NewRecovered: 0, TotalRecovered: 5036, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ER: {
      Country: 'Eritrea', CountryCode: 'ER', Slug: 'eritrea', NewConfirmed: 0, TotalConfirmed: 649, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 517, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    EE: {
      Country: 'Estonia', CountryCode: 'EE', Slug: 'estonia', NewConfirmed: 284, TotalConfirmed: 15510, NewDeaths: 3, TotalDeaths: 137, NewRecovered: 437, TotalRecovered: 9446, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ET: {
      Country: 'Ethiopia', CountryCode: 'ET', Slug: 'ethiopia', NewConfirmed: 531, TotalConfirmed: 114266, NewDeaths: 11, TotalDeaths: 1766, NewRecovered: 2145, TotalRecovered: 84948, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    FJ: {
      Country: 'Fiji', CountryCode: 'FJ', Slug: 'fiji', NewConfirmed: 0, TotalConfirmed: 44, NewDeaths: 0, TotalDeaths: 2, NewRecovered: 2, TotalRecovered: 35, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    FI: {
      Country: 'Finland', CountryCode: 'FI', Slug: 'finland', NewConfirmed: 361, TotalConfirmed: 28242, NewDeaths: 0, TotalDeaths: 424, NewRecovered: 0, TotalRecovered: 18100, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    FR: {
      Country: 'France', CountryCode: 'FR', Slug: 'france', NewConfirmed: 14137, TotalConfirmed: 2363196, NewDeaths: 840, TotalDeaths: 56453, NewRecovered: 1639, TotalRecovered: 177558, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GA: {
      Country: 'Gabon', CountryCode: 'GA', Slug: 'gabon', NewConfirmed: 0, TotalConfirmed: 9278, NewDeaths: 0, TotalDeaths: 60, NewRecovered: 0, TotalRecovered: 9132, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GM: {
      Country: 'Gambia', CountryCode: 'GM', Slug: 'gambia', NewConfirmed: 6, TotalConfirmed: 3776, NewDeaths: 0, TotalDeaths: 123, NewRecovered: 16, TotalRecovered: 3631, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GE: {
      Country: 'Georgia', CountryCode: 'GE', Slug: 'georgia', NewConfirmed: 4673, TotalConfirmed: 169649, NewDeaths: 36, TotalDeaths: 1576, NewRecovered: 3893, TotalRecovered: 141392, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    DE: {
      Country: 'Germany', CountryCode: 'DE', Slug: 'germany', NewConfirmed: 29263, TotalConfirmed: 1229269, NewDeaths: 568, TotalDeaths: 20002, NewRecovered: 20357, TotalRecovered: 909058, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GH: {
      Country: 'Ghana', CountryCode: 'GH', Slug: 'ghana', NewConfirmed: 226, TotalConfirmed: 52500, NewDeaths: 1, TotalDeaths: 326, NewRecovered: 256, TotalRecovered: 51319, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GR: {
      Country: 'Greece', CountryCode: 'GR', Slug: 'greece', NewConfirmed: 1324, TotalConfirmed: 118045, NewDeaths: 102, TotalDeaths: 3194, NewRecovered: 0, TotalRecovered: 23074, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GD: {
      Country: 'Grenada', CountryCode: 'GD', Slug: 'grenada', NewConfirmed: 0, TotalConfirmed: 43, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 41, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GT: {
      Country: 'Guatemala', CountryCode: 'GT', Slug: 'guatemala', NewConfirmed: 799, TotalConfirmed: 126473, NewDeaths: 12, TotalDeaths: 4286, NewRecovered: 709, TotalRecovered: 115406, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GN: {
      Country: 'Guinea', CountryCode: 'GN', Slug: 'guinea', NewConfirmed: 0, TotalConfirmed: 13264, NewDeaths: 0, TotalDeaths: 79, NewRecovered: 0, TotalRecovered: 12465, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GW: {
      Country: 'Guinea-Bissau', CountryCode: 'GW', Slug: 'guinea-bissau', NewConfirmed: 0, TotalConfirmed: 2444, NewDeaths: 0, TotalDeaths: 44, NewRecovered: 0, TotalRecovered: 2337, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GY: {
      Country: 'Guyana', CountryCode: 'GY', Slug: 'guyana', NewConfirmed: 3, TotalConfirmed: 5700, NewDeaths: 0, TotalDeaths: 154, NewRecovered: 91, TotalRecovered: 4870, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    HT: {
      Country: 'Haiti', CountryCode: 'HT', Slug: 'haiti', NewConfirmed: 0, TotalConfirmed: 9399, NewDeaths: 0, TotalDeaths: 233, NewRecovered: 0, TotalRecovered: 8148, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    VA: {
      Country: 'Holy See (Vatican City State)', CountryCode: 'VA', Slug: 'holy-see-vatican-city-state', NewConfirmed: 0, TotalConfirmed: 27, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 15, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    HN: {
      Country: 'Honduras', CountryCode: 'HN', Slug: 'honduras', NewConfirmed: 684, TotalConfirmed: 111707, NewDeaths: 4, TotalDeaths: 2950, NewRecovered: 325, TotalRecovered: 49781, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    HU: {
      Country: 'Hungary', CountryCode: 'HU', Slug: 'hungary', NewConfirmed: 2219, TotalConfirmed: 256367, NewDeaths: 136, TotalDeaths: 6120, NewRecovered: 998, TotalRecovered: 75281, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IS: {
      Country: 'Iceland', CountryCode: 'IS', Slug: 'iceland', NewConfirmed: 10, TotalConfirmed: 5506, NewDeaths: 1, TotalDeaths: 28, NewRecovered: 20, TotalRecovered: 5292, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IN: {
      Country: 'India', CountryCode: 'IN', Slug: 'india', NewConfirmed: 32080, TotalConfirmed: 9735850, NewDeaths: 402, TotalDeaths: 141360, NewRecovered: 36635, TotalRecovered: 9215581, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ID: {
      Country: 'Indonesia', CountryCode: 'ID', Slug: 'indonesia', NewConfirmed: 5292, TotalConfirmed: 586842, NewDeaths: 133, TotalDeaths: 18000, NewRecovered: 4295, TotalRecovered: 483497, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IR: {
      Country: 'Iran, Islamic Republic of', CountryCode: 'IR', Slug: 'iran', NewConfirmed: 11023, TotalConfirmed: 1062397, NewDeaths: 323, TotalDeaths: 50917, NewRecovered: 11269, TotalRecovered: 754224, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IQ: {
      Country: 'Iraq', CountryCode: 'IQ', Slug: 'iraq', NewConfirmed: 2123, TotalConfirmed: 568138, NewDeaths: 17, TotalDeaths: 12477, NewRecovered: 2339, TotalRecovered: 498064, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IE: {
      Country: 'Ireland', CountryCode: 'IE', Slug: 'ireland', NewConfirmed: 214, TotalConfirmed: 74682, NewDeaths: 0, TotalDeaths: 2099, NewRecovered: 0, TotalRecovered: 23364, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IL: {
      Country: 'Israel', CountryCode: 'IL', Slug: 'israel', NewConfirmed: 1488, TotalConfirmed: 348285, NewDeaths: 8, TotalDeaths: 2932, NewRecovered: 867, TotalRecovered: 331055, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    IT: {
      Country: 'Italy', CountryCode: 'IT', Slug: 'italy', NewConfirmed: 14837, TotalConfirmed: 1757394, NewDeaths: 634, TotalDeaths: 61240, NewRecovered: 25497, TotalRecovered: 958629, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    JM: {
      Country: 'Jamaica', CountryCode: 'JM', Slug: 'jamaica', NewConfirmed: 87, TotalConfirmed: 11271, NewDeaths: 0, TotalDeaths: 265, NewRecovered: 146, TotalRecovered: 7292, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    JP: {
      Country: 'Japan', CountryCode: 'JP', Slug: 'japan', NewConfirmed: 2158, TotalConfirmed: 166592, NewDeaths: 35, TotalDeaths: 2334, NewRecovered: 2091, TotalRecovered: 138838, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    JO: {
      Country: 'Jordan', CountryCode: 'JO', Slug: 'jordan', NewConfirmed: 3062, TotalConfirmed: 247131, NewDeaths: 46, TotalDeaths: 3162, NewRecovered: 5025, TotalRecovered: 197058, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KZ: {
      Country: 'Kazakhstan', CountryCode: 'KZ', Slug: 'kazakhstan', NewConfirmed: 944, TotalConfirmed: 181721, NewDeaths: 54, TotalDeaths: 2544, NewRecovered: 1053, TotalRecovered: 153432, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KE: {
      Country: 'Kenya', CountryCode: 'KE', Slug: 'kenya', NewConfirmed: 521, TotalConfirmed: 89100, NewDeaths: 14, TotalDeaths: 1545, NewRecovered: 425, TotalRecovered: 69839, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KR: {
      Country: 'Korea (South)', CountryCode: 'KR', Slug: 'korea-south', NewConfirmed: 677, TotalConfirmed: 39432, NewDeaths: 4, TotalDeaths: 556, NewRecovered: 527, TotalRecovered: 30177, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KW: {
      Country: 'Kuwait', CountryCode: 'KW', Slug: 'kuwait', NewConfirmed: 301, TotalConfirmed: 144900, NewDeaths: 3, TotalDeaths: 900, NewRecovered: 297, TotalRecovered: 140638, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KG: {
      Country: 'Kyrgyzstan', CountryCode: 'KG', Slug: 'kyrgyzstan', NewConfirmed: 295, TotalConfirmed: 75690, NewDeaths: 4, TotalDeaths: 1301, NewRecovered: 473, TotalRecovered: 67873, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LA: {
      Country: 'Lao PDR', CountryCode: 'LA', Slug: 'lao-pdr', NewConfirmed: 0, TotalConfirmed: 41, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 2, TotalRecovered: 28, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LV: {
      Country: 'Latvia', CountryCode: 'LV', Slug: 'latvia', NewConfirmed: 584, TotalConfirmed: 22104, NewDeaths: 16, TotalDeaths: 288, NewRecovered: 0, TotalRecovered: 1866, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LB: {
      Country: 'Lebanon', CountryCode: 'LB', Slug: 'lebanon', NewConfirmed: 1039, TotalConfirmed: 139135, NewDeaths: 21, TotalDeaths: 1136, NewRecovered: 2871, TotalRecovered: 93100, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LS: {
      Country: 'Lesotho', CountryCode: 'LS', Slug: 'lesotho', NewConfirmed: 0, TotalConfirmed: 2150, NewDeaths: 0, TotalDeaths: 44, NewRecovered: 0, TotalRecovered: 1278, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LR: {
      Country: 'Liberia', CountryCode: 'LR', Slug: 'liberia', NewConfirmed: 0, TotalConfirmed: 1676, NewDeaths: 0, TotalDeaths: 83, NewRecovered: 0, TotalRecovered: 1358, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LY: {
      Country: 'Libya', CountryCode: 'LY', Slug: 'libya', NewConfirmed: 889, TotalConfirmed: 87986, NewDeaths: 12, TotalDeaths: 1255, NewRecovered: 457, TotalRecovered: 57837, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LI: {
      Country: 'Liechtenstein', CountryCode: 'LI', Slug: 'liechtenstein', NewConfirmed: 7, TotalConfirmed: 1404, NewDeaths: 0, TotalDeaths: 19, NewRecovered: 0, TotalRecovered: 1235, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LT: {
      Country: 'Lithuania', CountryCode: 'LT', Slug: 'lithuania', NewConfirmed: 1390, TotalConfirmed: 77426, NewDeaths: 36, TotalDeaths: 673, NewRecovered: 1950, TotalRecovered: 32399, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LU: {
      Country: 'Luxembourg', CountryCode: 'LU', Slug: 'luxembourg', NewConfirmed: 0, TotalConfirmed: 38476, NewDeaths: 0, TotalDeaths: 360, NewRecovered: 0, TotalRecovered: 29792, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MO: {
      Country: 'Macao, SAR China', CountryCode: 'MO', Slug: 'macao-sar-china', NewConfirmed: 0, TotalConfirmed: 0, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MK: {
      Country: 'Macedonia, Republic of', CountryCode: 'MK', Slug: 'macedonia', NewConfirmed: 1120, TotalConfirmed: 69452, NewDeaths: 28, TotalDeaths: 1977, NewRecovered: 916, TotalRecovered: 45621, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MG: {
      Country: 'Madagascar', CountryCode: 'MG', Slug: 'madagascar', NewConfirmed: 0, TotalConfirmed: 17513, NewDeaths: 0, TotalDeaths: 255, NewRecovered: 0, TotalRecovered: 16927, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MW: {
      Country: 'Malawi', CountryCode: 'MW', Slug: 'malawi', NewConfirmed: 0, TotalConfirmed: 6051, NewDeaths: 1, TotalDeaths: 186, NewRecovered: 6, TotalRecovered: 5482, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MY: {
      Country: 'Malaysia', CountryCode: 'MY', Slug: 'malaysia', NewConfirmed: 1012, TotalConfirmed: 75306, NewDeaths: 4, TotalDeaths: 388, NewRecovered: 1750, TotalRecovered: 64056, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MV: {
      Country: 'Maldives', CountryCode: 'MV', Slug: 'maldives', NewConfirmed: 35, TotalConfirmed: 13248, NewDeaths: 0, TotalDeaths: 47, NewRecovered: 50, TotalRecovered: 12487, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ML: {
      Country: 'Mali', CountryCode: 'ML', Slug: 'mali', NewConfirmed: 152, TotalConfirmed: 5442, NewDeaths: 5, TotalDeaths: 180, NewRecovered: 39, TotalRecovered: 3416, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MT: {
      Country: 'Malta', CountryCode: 'MT', Slug: 'malta', NewConfirmed: 40, TotalConfirmed: 10699, NewDeaths: 2, TotalDeaths: 157, NewRecovered: 144, TotalRecovered: 8641, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MH: {
      Country: 'Marshall Islands', CountryCode: 'MH', Slug: 'marshall-islands', NewConfirmed: 0, TotalConfirmed: 4, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 4, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MR: {
      Country: 'Mauritania', CountryCode: 'MR', Slug: 'mauritania', NewConfirmed: 197, TotalConfirmed: 9876, NewDeaths: 3, TotalDeaths: 197, NewRecovered: 55, TotalRecovered: 7904, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MU: {
      Country: 'Mauritius', CountryCode: 'MU', Slug: 'mauritius', NewConfirmed: 4, TotalConfirmed: 515, NewDeaths: 0, TotalDeaths: 10, NewRecovered: 0, TotalRecovered: 478, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MX: {
      Country: 'Mexico', CountryCode: 'MX', Slug: 'mexico', NewConfirmed: 11006, TotalConfirmed: 1193255, NewDeaths: 800, TotalDeaths: 110874, NewRecovered: 7495, TotalRecovered: 881050, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MD: {
      Country: 'Moldova', CountryCode: 'MD', Slug: 'moldova', NewConfirmed: 1709, TotalConfirmed: 119204, NewDeaths: 22, TotalDeaths: 2460, NewRecovered: 627, TotalRecovered: 102565, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MC: {
      Country: 'Monaco', CountryCode: 'MC', Slug: 'monaco', NewConfirmed: 7, TotalConfirmed: 648, NewDeaths: 0, TotalDeaths: 3, NewRecovered: 3, TotalRecovered: 580, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MN: {
      Country: 'Mongolia', CountryCode: 'MN', Slug: 'mongolia', NewConfirmed: 5, TotalConfirmed: 893, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 384, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ME: {
      Country: 'Montenegro', CountryCode: 'ME', Slug: 'montenegro', NewConfirmed: 591, TotalConfirmed: 39153, NewDeaths: 6, TotalDeaths: 549, NewRecovered: 401, TotalRecovered: 28052, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MA: {
      Country: 'Morocco', CountryCode: 'MA', Slug: 'morocco', NewConfirmed: 2900, TotalConfirmed: 384088, NewDeaths: 50, TotalDeaths: 6370, NewRecovered: 3450, TotalRecovered: 337719, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MZ: {
      Country: 'Mozambique', CountryCode: 'MZ', Slug: 'mozambique', NewConfirmed: 47, TotalConfirmed: 16373, NewDeaths: 0, TotalDeaths: 136, NewRecovered: 8, TotalRecovered: 14437, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    MM: {
      Country: 'Myanmar', CountryCode: 'MM', Slug: 'myanmar', NewConfirmed: 1308, TotalConfirmed: 101739, NewDeaths: 19, TotalDeaths: 2151, NewRecovered: 1486, TotalRecovered: 80726, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NA: {
      Country: 'Namibia', CountryCode: 'NA', Slug: 'namibia', NewConfirmed: 79, TotalConfirmed: 15298, NewDeaths: 1, TotalDeaths: 153, NewRecovered: 55, TotalRecovered: 14004, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NP: {
      Country: 'Nepal', CountryCode: 'NP', Slug: 'nepal', NewConfirmed: 1382, TotalConfirmed: 243377, NewDeaths: 23, TotalDeaths: 1637, NewRecovered: 1621, TotalRecovered: 229054, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NL: {
      Country: 'Netherlands', CountryCode: 'NL', Slug: 'netherlands', NewConfirmed: 6146, TotalConfirmed: 570437, NewDeaths: 71, TotalDeaths: 9775, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NZ: {
      Country: 'New Zealand', CountryCode: 'NZ', Slug: 'new-zealand', NewConfirmed: 3, TotalConfirmed: 2088, NewDeaths: 0, TotalDeaths: 25, NewRecovered: 2, TotalRecovered: 2008, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NI: {
      Country: 'Nicaragua', CountryCode: 'NI', Slug: 'nicaragua', NewConfirmed: 49, TotalConfirmed: 5887, NewDeaths: 1, TotalDeaths: 162, NewRecovered: 0, TotalRecovered: 4225, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NE: {
      Country: 'Niger', CountryCode: 'NE', Slug: 'niger', NewConfirmed: 93, TotalConfirmed: 1987, NewDeaths: 1, TotalDeaths: 79, NewRecovered: 0, TotalRecovered: 1239, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NG: {
      Country: 'Nigeria', CountryCode: 'NG', Slug: 'nigeria', NewConfirmed: 550, TotalConfirmed: 70195, NewDeaths: 1, TotalDeaths: 1182, NewRecovered: 163, TotalRecovered: 65110, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    NO: {
      Country: 'Norway', CountryCode: 'NO', Slug: 'norway', NewConfirmed: 460, TotalConfirmed: 39163, NewDeaths: 2, TotalDeaths: 361, NewRecovered: 0, TotalRecovered: 17998, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    OM: {
      Country: 'Oman', CountryCode: 'OM', Slug: 'oman', NewConfirmed: 210, TotalConfirmed: 125325, NewDeaths: 2, TotalDeaths: 1454, NewRecovered: 214, TotalRecovered: 116720, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PK: {
      Country: 'Pakistan', CountryCode: 'PK', Slug: 'pakistan', NewConfirmed: 2963, TotalConfirmed: 426142, NewDeaths: 60, TotalDeaths: 8547, NewRecovered: 1797, TotalRecovered: 372271, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PS: {
      Country: 'Palestinian Territory', CountryCode: 'PS', Slug: 'palestine', NewConfirmed: 1351, TotalConfirmed: 101109, NewDeaths: 19, TotalDeaths: 867, NewRecovered: 1204, TotalRecovered: 75257, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PA: {
      Country: 'Panama', CountryCode: 'PA', Slug: 'panama', NewConfirmed: 1936, TotalConfirmed: 181166, NewDeaths: 29, TotalDeaths: 3241, NewRecovered: 1540, TotalRecovered: 155870, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PG: {
      Country: 'Papua New Guinea', CountryCode: 'PG', Slug: 'papua-new-guinea', NewConfirmed: 13, TotalConfirmed: 684, NewDeaths: 0, TotalDeaths: 7, NewRecovered: 4, TotalRecovered: 601, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PY: {
      Country: 'Paraguay', CountryCode: 'PY', Slug: 'paraguay', NewConfirmed: 698, TotalConfirmed: 89421, NewDeaths: 15, TotalDeaths: 1887, NewRecovered: 640, TotalRecovered: 63243, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PE: {
      Country: 'Peru', CountryCode: 'PE', Slug: 'peru', NewConfirmed: 0, TotalConfirmed: 973912, NewDeaths: 0, TotalDeaths: 36274, NewRecovered: 1735, TotalRecovered: 909389, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PH: {
      Country: 'Philippines', CountryCode: 'PH', Slug: 'philippines', NewConfirmed: 1386, TotalConfirmed: 442785, NewDeaths: 98, TotalDeaths: 8670, NewRecovered: 88, TotalRecovered: 408790, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PL: {
      Country: 'Poland', CountryCode: 'PL', Slug: 'poland', NewConfirmed: 8310, TotalConfirmed: 1076180, NewDeaths: 411, TotalDeaths: 20592, NewRecovered: 16399, TotalRecovered: 738845, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    PT: {
      Country: 'Portugal', CountryCode: 'PT', Slug: 'portugal', NewConfirmed: 2905, TotalConfirmed: 327976, NewDeaths: 81, TotalDeaths: 5122, NewRecovered: 6585, TotalRecovered: 252428, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    QA: {
      Country: 'Qatar', CountryCode: 'QA', Slug: 'qatar', NewConfirmed: 117, TotalConfirmed: 140203, NewDeaths: 0, TotalDeaths: 239, NewRecovered: 214, TotalRecovered: 137708, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    XK: {
      Country: 'Republic of Kosovo', CountryCode: 'XK', Slug: 'kosovo', NewConfirmed: 557, TotalConfirmed: 43881, NewDeaths: 17, TotalDeaths: 1137, NewRecovered: 727, TotalRecovered: 30157, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    RO: {
      Country: 'Romania', CountryCode: 'RO', Slug: 'romania', NewConfirmed: 7439, TotalConfirmed: 524675, NewDeaths: 213, TotalDeaths: 12660, NewRecovered: 7676, TotalRecovered: 416797, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    RU: {
      Country: 'Russian Federation', CountryCode: 'RU', Slug: 'russia', NewConfirmed: 25752, TotalConfirmed: 2492713, NewDeaths: 552, TotalDeaths: 43674, NewRecovered: 24471, TotalRecovered: 1963864, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    RW: {
      Country: 'Rwanda', CountryCode: 'RW', Slug: 'rwanda', NewConfirmed: 46, TotalConfirmed: 6237, NewDeaths: 0, TotalDeaths: 51, NewRecovered: 19, TotalRecovered: 5715, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    RE: {
      Country: 'Réunion', CountryCode: 'RE', Slug: 'réunion', NewConfirmed: 0, TotalConfirmed: 0, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    KN: {
      Country: 'Saint Kitts and Nevis', CountryCode: 'KN', Slug: 'saint-kitts-and-nevis', NewConfirmed: 0, TotalConfirmed: 25, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 21, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LC: {
      Country: 'Saint Lucia', CountryCode: 'LC', Slug: 'saint-lucia', NewConfirmed: 0, TotalConfirmed: 270, NewDeaths: 0, TotalDeaths: 2, NewRecovered: 4, TotalRecovered: 169, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    VC: {
      Country: 'Saint Vincent and Grenadines', CountryCode: 'VC', Slug: 'saint-vincent-and-the-grenadines', NewConfirmed: 0, TotalConfirmed: 87, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 80, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    WS: {
      Country: 'Samoa', CountryCode: 'WS', Slug: 'samoa', NewConfirmed: 0, TotalConfirmed: 2, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 2, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SM: {
      Country: 'San Marino', CountryCode: 'SM', Slug: 'san-marino', NewConfirmed: 0, TotalConfirmed: 1800, NewDeaths: 0, TotalDeaths: 48, NewRecovered: 0, TotalRecovered: 1438, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ST: {
      Country: 'Sao Tome and Principe', CountryCode: 'ST', Slug: 'sao-tome-and-principe', NewConfirmed: 3, TotalConfirmed: 1005, NewDeaths: 0, TotalDeaths: 17, NewRecovered: 4, TotalRecovered: 944, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SA: {
      Country: 'Saudi Arabia', CountryCode: 'SA', Slug: 'saudi-arabia', NewConfirmed: 193, TotalConfirmed: 359115, NewDeaths: 12, TotalDeaths: 5989, NewRecovered: 246, TotalRecovered: 349414, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SN: {
      Country: 'Senegal', CountryCode: 'SN', Slug: 'senegal', NewConfirmed: 43, TotalConfirmed: 16596, NewDeaths: 0, TotalDeaths: 340, NewRecovered: 58, TotalRecovered: 15864, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    RS: {
      Country: 'Serbia', CountryCode: 'RS', Slug: 'serbia', NewConfirmed: 7818, TotalConfirmed: 234027, NewDeaths: 57, TotalDeaths: 2062, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SC: {
      Country: 'Seychelles', CountryCode: 'SC', Slug: 'seychelles', NewConfirmed: 0, TotalConfirmed: 184, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 168, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SL: {
      Country: 'Sierra Leone', CountryCode: 'SL', Slug: 'sierra-leone', NewConfirmed: 0, TotalConfirmed: 2428, NewDeaths: 0, TotalDeaths: 74, NewRecovered: 1, TotalRecovered: 1847, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SG: {
      Country: 'Singapore', CountryCode: 'SG', Slug: 'singapore', NewConfirmed: 12, TotalConfirmed: 58285, NewDeaths: 0, TotalDeaths: 29, NewRecovered: 8, TotalRecovered: 58176, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SK: {
      Country: 'Slovakia', CountryCode: 'SK', Slug: 'slovakia', NewConfirmed: 1949, TotalConfirmed: 119232, NewDeaths: 28, TotalDeaths: 1046, NewRecovered: 2583, TotalRecovered: 87433, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SI: {
      Country: 'Slovenia', CountryCode: 'SI', Slug: 'slovenia', NewConfirmed: 1648, TotalConfirmed: 87936, NewDeaths: 66, TotalDeaths: 1862, NewRecovered: 1241, TotalRecovered: 65240, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SB: {
      Country: 'Solomon Islands', CountryCode: 'SB', Slug: 'solomon-islands', NewConfirmed: 0, TotalConfirmed: 17, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 5, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SO: {
      Country: 'Somalia', CountryCode: 'SO', Slug: 'somalia', NewConfirmed: 0, TotalConfirmed: 4579, NewDeaths: 0, TotalDeaths: 121, NewRecovered: 0, TotalRecovered: 3529, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ZA: {
      Country: 'South Africa', CountryCode: 'ZA', Slug: 'south-africa', NewConfirmed: 4011, TotalConfirmed: 821889, NewDeaths: 183, TotalDeaths: 22432, NewRecovered: 7322, TotalRecovered: 753072, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SS: {
      Country: 'South Sudan', CountryCode: 'SS', Slug: 'south-sudan', NewConfirmed: 0, TotalConfirmed: 3181, NewDeaths: 0, TotalDeaths: 62, NewRecovered: 26, TotalRecovered: 3003, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ES: {
      Country: 'Spain', CountryCode: 'ES', Slug: 'spain', NewConfirmed: 0, TotalConfirmed: 1702328, NewDeaths: 0, TotalDeaths: 46646, NewRecovered: 0, TotalRecovered: 150376, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    LK: {
      Country: 'Sri Lanka', CountryCode: 'LK', Slug: 'sri-lanka', NewConfirmed: 798, TotalConfirmed: 29378, NewDeaths: 0, TotalDeaths: 142, NewRecovered: 454, TotalRecovered: 21258, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SD: {
      Country: 'Sudan', CountryCode: 'SD', Slug: 'sudan', NewConfirmed: 0, TotalConfirmed: 19747, NewDeaths: 0, TotalDeaths: 1301, NewRecovered: 0, TotalRecovered: 11184, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SR: {
      Country: 'Suriname', CountryCode: 'SR', Slug: 'suriname', NewConfirmed: 1, TotalConfirmed: 5326, NewDeaths: 0, TotalDeaths: 117, NewRecovered: 3, TotalRecovered: 5217, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SZ: {
      Country: 'Swaziland', CountryCode: 'SZ', Slug: 'swaziland', NewConfirmed: 34, TotalConfirmed: 6563, NewDeaths: 1, TotalDeaths: 124, NewRecovered: 43, TotalRecovered: 6137, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SE: {
      Country: 'Sweden', CountryCode: 'SE', Slug: 'sweden', NewConfirmed: 18820, TotalConfirmed: 297732, NewDeaths: 133, TotalDeaths: 7200, NewRecovered: 0, TotalRecovered: 0, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    CH: {
      Country: 'Switzerland', CountryCode: 'CH', Slug: 'switzerland', NewConfirmed: 4262, TotalConfirmed: 358568, NewDeaths: 98, TotalDeaths: 5593, NewRecovered: 0, TotalRecovered: 279900, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    SY: {
      Country: 'Syrian Arab Republic (Syria)', CountryCode: 'SY', Slug: 'syria', NewConfirmed: 90, TotalConfirmed: 8580, NewDeaths: 6, TotalDeaths: 458, NewRecovered: 59, TotalRecovered: 4059, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TW: {
      Country: 'Taiwan, Republic of China', CountryCode: 'TW', Slug: 'taiwan', NewConfirmed: 2, TotalConfirmed: 718, NewDeaths: 0, TotalDeaths: 7, NewRecovered: 8, TotalRecovered: 582, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TJ: {
      Country: 'Tajikistan', CountryCode: 'TJ', Slug: 'tajikistan', NewConfirmed: 42, TotalConfirmed: 12511, NewDeaths: 1, TotalDeaths: 88, NewRecovered: 45, TotalRecovered: 11926, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TZ: {
      Country: 'Tanzania, United Republic of', CountryCode: 'TZ', Slug: 'tanzania', NewConfirmed: 0, TotalConfirmed: 509, NewDeaths: 0, TotalDeaths: 21, NewRecovered: 0, TotalRecovered: 183, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TH: {
      Country: 'Thailand', CountryCode: 'TH', Slug: 'thailand', NewConfirmed: 25, TotalConfirmed: 4151, NewDeaths: 0, TotalDeaths: 60, NewRecovered: 6, TotalRecovered: 3880, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TL: {
      Country: 'Timor-Leste', CountryCode: 'TL', Slug: 'timor-leste', NewConfirmed: 0, TotalConfirmed: 31, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 30, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TG: {
      Country: 'Togo', CountryCode: 'TG', Slug: 'togo', NewConfirmed: 21, TotalConfirmed: 3132, NewDeaths: 0, TotalDeaths: 65, NewRecovered: 14, TotalRecovered: 2691, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TT: {
      Country: 'Trinidad and Tobago', CountryCode: 'TT', Slug: 'trinidad-and-tobago', NewConfirmed: 7, TotalConfirmed: 6782, NewDeaths: 0, TotalDeaths: 122, NewRecovered: 34, TotalRecovered: 5996, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TN: {
      Country: 'Tunisia', CountryCode: 'TN', Slug: 'tunisia', NewConfirmed: 1116, TotalConfirmed: 105445, NewDeaths: 72, TotalDeaths: 3668, NewRecovered: 2284, TotalRecovered: 80082, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    TR: {
      Country: 'Turkey', CountryCode: 'TR', Slug: 'turkey', NewConfirmed: 33198, TotalConfirmed: 893630, NewDeaths: 211, TotalDeaths: 15314, NewRecovered: 5245, TotalRecovered: 441515, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    UG: {
      Country: 'Uganda', CountryCode: 'UG', Slug: 'uganda', NewConfirmed: 0, TotalConfirmed: 23200, NewDeaths: 0, TotalDeaths: 207, NewRecovered: 0, TotalRecovered: 9374, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    UA: {
      Country: 'Ukraine', CountryCode: 'UA', Slug: 'ukraine', NewConfirmed: 11156, TotalConfirmed: 855054, NewDeaths: 205, TotalDeaths: 14413, NewRecovered: 13327, TotalRecovered: 454226, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    AE: {
      Country: 'United Arab Emirates', CountryCode: 'AE', Slug: 'united-arab-emirates', NewConfirmed: 1260, TotalConfirmed: 178837, NewDeaths: 2, TotalDeaths: 596, NewRecovered: 584, TotalRecovered: 160295, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    GB: {
      Country: 'United Kingdom', CountryCode: 'GB', Slug: 'united-kingdom', NewConfirmed: 12386, TotalConfirmed: 1754911, NewDeaths: 599, TotalDeaths: 62130, NewRecovered: 18, TotalRecovered: 3765, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    US: {
      Country: 'United States of America', CountryCode: 'US', Slug: 'united-states', NewConfirmed: 215860, TotalConfirmed: 15165159, NewDeaths: 2546, TotalDeaths: 286249, NewRecovered: 72358, TotalRecovered: 5786915, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    UY: {
      Country: 'Uruguay', CountryCode: 'UY', Slug: 'uruguay', NewConfirmed: 301, TotalConfirmed: 7806, NewDeaths: 3, TotalDeaths: 86, NewRecovered: 175, TotalRecovered: 5415, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    UZ: {
      Country: 'Uzbekistan', CountryCode: 'UZ', Slug: 'uzbekistan', NewConfirmed: 153, TotalConfirmed: 74206, NewDeaths: 0, TotalDeaths: 611, NewRecovered: 167, TotalRecovered: 71482, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    VU: {
      Country: 'Vanuatu', CountryCode: 'VU', Slug: 'vanuatu', NewConfirmed: 0, TotalConfirmed: 1, NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 1, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    VE: {
      Country: 'Venezuela (Bolivarian Republic)', CountryCode: 'VE', Slug: 'venezuela', NewConfirmed: 480, TotalConfirmed: 105384, NewDeaths: 4, TotalDeaths: 928, NewRecovered: 494, TotalRecovered: 100476, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    VN: {
      Country: 'Viet Nam', CountryCode: 'VN', Slug: 'vietnam', NewConfirmed: 10, TotalConfirmed: 1377, NewDeaths: 0, TotalDeaths: 35, NewRecovered: 0, TotalRecovered: 1224, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    EH: {
      Country: 'Western Sahara', CountryCode: 'EH', Slug: 'western-sahara', NewConfirmed: 0, TotalConfirmed: 10, NewDeaths: 0, TotalDeaths: 1, NewRecovered: 0, TotalRecovered: 8, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    YE: {
      Country: 'Yemen', CountryCode: 'YE', Slug: 'yemen', NewConfirmed: 0, TotalConfirmed: 2383, NewDeaths: 0, TotalDeaths: 649, NewRecovered: 0, TotalRecovered: 1554, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ZM: {
      Country: 'Zambia', CountryCode: 'ZM', Slug: 'zambia', NewConfirmed: 32, TotalConfirmed: 17963, NewDeaths: 0, TotalDeaths: 364, NewRecovered: 57, TotalRecovered: 17268, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
    ZW: {
      Country: 'Zimbabwe', CountryCode: 'ZW', Slug: 'zimbabwe', NewConfirmed: 73, TotalConfirmed: 10912, NewDeaths: 9, TotalDeaths: 303, NewRecovered: 90, TotalRecovered: 9062, Date: '2020-12-09T11:01:49Z', Premium: {},
    },
  },
};

export const getData = function dataGetter() {
  return data;
};
