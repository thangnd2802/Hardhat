

<template>
  <div id="app">
    
    <!-- <router-view /> -->
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost stat-value">Vamqyx</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Inbox
              <span class="badge badge-sm">99+</span>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Updates
              <span class="badge badge-sm badge-warning">NEW</span>
            </a>
          </li>
          <li>
            <a>
              Stats
              <span class="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button 
          v-if="walletAddress.length === 0"
          type="button" 
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg mt-2 text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2" 
          id="walletButton" 
          :onClick="OnConnectWalletClick"
        >
            <svg aria-hidden="true" class="w-6 h-5 me-2 -ms-1" viewBox="0 0 2405 2501" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1512_1323)"> <path d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> </g> <defs> <clipPath id="clip0_1512_1323"> <rect width="2404" height="2500" fill="white" transform="translate(0.519043 0.132812)"/> </clipPath> </defs> </svg>
            Connect with MetaMask
        </button>
        <div class="stat w-fit" v-else>
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div class="stat-value">{{  (Math.floor(balance * 100) / 100).toFixed(2) }} </div>
          <div class="stat-title">🦊 Account:&nbsp;{{ String(walletAddress).substring(0, 6)}}...{{ String(walletAddress).substring(38) }}</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>

    <div class="flex gap-2 mt-1 ml-1 h-screen">
      
      <div class="flex justify-center">
        <ul class="menu w-fit bg-base-300 gap-4 rounded-box">
          <li>
            <a  class="tooltip tooltip-right" data-tip="Home">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </a>
          </li>
          <li>
            <a class="tooltip tooltip-right" data-tip="Details">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
          <li>
            <a class="tooltip tooltip-right" data-tip="Stats">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
          </li>
          <li>
            <a class="tooltip tooltip-right" data-tip="Home">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </a>
          </li>
          <li>
            <a class="tooltip tooltip-right" data-tip="Details">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
          <li>
            <a class="tooltip tooltip-right" data-tip="Stats">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="flex-auto w-1/2 bg-base-300 p-1">
        
        <div role="tablist" class="w-fit tabs tabs-boxed bg-base-200 mt-1 mx-auto">
          <a  v-for="(tab, idx) in tabs"  role="tab" :class="{'tab': true, 'tab-active': idx === activeTab}"
            @click="activeTab = idx">
            {{ tab.name }}
          </a>
        </div>

        <div v-if="activeTab==0" >
          <div class="flex flex-wrap">
            <div v-for="sellerNFT in sellerNFTs" :key="sellerNFT.metadata.image" class="w-1/3 p-4">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
                <a href="#">
                    <img class="rounded-t-lg" :src="getFileSource(sellerNFT.metadata)" :alt="sellerNFT.metadata.image" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ sellerNFT.metadata.name }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ sellerNFT.metadata.description }}</p>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{{sellerNFT.price  }}&nbsp;ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab==1"  class="h-screen" >

          <dialog id="createNFTModal" class="modal bg-base-300">
              <div class="modal-box">
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div class="card shrink-0 w-full shadow-2xl p-1">
                  <h3 class="card-title p-1">Create NFT</h3> 
                  <div class="card-body">
                    <input type="text" placeholder="Asset name" class="input input-bordered input-info w-full" 
                      :value="createNFT.name"
                      @input="event => createNFT.name = event.target.value"
                    />
                    <textarea class="textarea textarea-accent" placeholder="Asset description"
                      :value="createNFT.description"
                      @input="event => createNFT.description = event.target.value"
                    ></textarea>
                    <input type="number" placeholder="Price" class="input input-bordered input-warning w-full" 
                      :value="createNFT.price"
                      @input="event => createNFT.price = event.target.value"
                    />

                    <div class="flex items-center justify-center w-full border-2 border-secondary border-dashed rounded-lg">
                      
                      <div v-if="createNFT.file" class="fbg-gray-700">
                        <img class="h-auto max-w-full rounded-lg" :src="previewImage" alt="image description">
                      </div>
                      
                      <label v-else for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          <input id="dropzone-file" type="file" @change="onFileChange" class="hidden"/>
                      </label>
                    </div>
                    
            
                    <button class="btn btn-outline btn-success" @click="OnClickCreateNFT" >Create</button>
                  </div>
                </div>

              
              </div>
            </dialog>

          <div class="stats shadow mt-2 flex justify-center">
  
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="stat-title">Downloads</div>
              <div class="stat-value">31K</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <div class="stat-title">New Users</div>
              <div class="stat-value">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              </div>
              <div class="stat-title">New Registers</div>
              <div class="stat-value">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
          </div>

          <div class="navbar bg-base-100 mt-1">
            <div class="navbar-start">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li>
                    <a>Parent</a>
                    <ul class="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
              <a class="btn btn-ghost text-xl">Your NFTs</a>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <div class="navbar-end">
              <!-- <a class="btn">Button</a> -->
              <button class="btn btn-outline btn-secondary" onclick="createNFTModal.showModal()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                Create NFT
              </button>
            </div>
          </div>

          <div class="carousel carousel-start w-full p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" />
            </div> 
            <div class="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" />
            </div>
          </div>

          <div class="navbar bg-base-100 mt-1">
            <div class="navbar-start">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li>
                    <a>Parent</a>
                    <ul class="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
              <a class="btn btn-ghost text-xl">Selling NFTs</a>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <div class="navbar-end">
              <!-- <a class="btn">Button</a> -->
              
            </div>
          </div>

          <div class="carousel carousel-start w-full p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="carousel-item card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="carousel-item card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="carousel-item card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="carousel-item card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>

          

          
          
          
        </div>
        <div v-if="activeTab==2" >Tab content 3</div>
        
      </div>

      <div class="flex-auto bg-base-300 ">

      </div>

     

        

  
      
    
    </div>


  
  </div>

  <!-- <div class="badge badge-outline h-auto">
    <div class="stat">
      <div class="stat-figure text-secondary">

        <svg viewBox="0 0 32 32" class="inline-block w-20 h-20 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" transform="rotate(0)">
          <polyline class="st1" id="XMLID_1557_" points="7.3,16 16,1.5 24.7,16 16,30.5 "></polyline> 
          <line class="st1" id="XMLID_1539_" x1="16" x2="7.3" y1="30.5" y2="16"></line> 
          <line class="st1" id="XMLID_3278_" x1="18.04" x2="24.7" y1="12.67" y2="16"></line> 
          <line class="st1" id="XMLID_266_" x1="7.3" x2="13.95" y1="16" y2="12.67"></line> 
          <polygon class="st1" id="XMLID_1538_" points="16,30.5 7.3,16 16,20.35 24.7,16 "></polygon> 
          <line class="st1" id="XMLID_1537_" x1="16" x2="16" y1="19.85" y2="5.5"></line> 
          <polygon class="st1" id="XMLID_1536_" points="16,1.5 7.3,16 16,30.5 24.7,16 "></polygon> 
        </svg>
      
      </div>
      <div class="stat-title">Listing Fee</div>
      <div class="stat-value">{{ listingFee }}</div>
      <div class="stat-desc">ETH</div>
    </div>
  </div> -->

  

</template>

<script type="text/javascript">

import NavBar from "./components/NavBar.vue";
import { CID, create } from 'kubo-rpc-client';
import Web3 from 'web3';
import marketABI from '../lib/NFTMarket.json';
import nftABI from '../lib/NFT.json';

const defaultNFTCreateData = {
  name: "",
  description: "",
  price: 0,
  file: null,
};

const IPFS_URI_PRE = 'ipfs://';

const walletConnectionStatus = Object.freeze({ 
  CONNECTED: 1, 
  DISCONNECTED: 0,
  UNINSTALLED: -1
}); 

export default {
  components: {
    NavBar, // register component
  },
  data() {
    return {
      //components control
      tabs : [{name: 'Market'}, {name: 'Dashboard'}, {name: 'Settings'}],
      activeTab: 0,
      dashboardActiveTab: 0,
      // web3
      web3: new Web3(window.ethereum),
      chainId : '',
      market_address: '',
      marketContract: null,
      nft_address: '',
      nftContract: null,
      //ipfs
      ipfs_rpc_api: 'http://127.0.0.1:5001/api/v0',
      ipfs_gateway: 'http://127.0.0.1:8080/ipfs/',
      ipfs_client: create(`http://127.0.0.1:5001/api/v0`),
      images : [],
      //wallet
      status: walletConnectionStatus.DISCONNECTED,
      address: "",
      walletAddress: "",
      balance: 0,
      //contract 
      listingFee: 0,
      //data creation
      createNFT: { ...defaultNFTCreateData},
      previewImage: null,
      fileCIDCreated: null,
      metadataCIDCreated: null,
      // data retrieval
      sellerNFTs: [],

    };
  },
  
  async mounted() {

    this.getCurrentWalletConnected().then((wallet) => {
      this.walletAddress = wallet.address;
      this.status = wallet.status;
      this.getAccountBalance(wallet.address).then((balance) => {
        this.balance = balance;
      });
    });
    this.web3.eth.getChainId().then((chainId) => {
      this.chainId = chainId.toString();

      this.market_address = marketABI[this.chainId].address;
      this.marketContract = new this.web3.eth.Contract(
        marketABI[this.chainId].abi,
        this.web3.utils.toChecksumAddress(this.market_address)
      );

      this.marketContract.events.marketItemNFT({}, (error, event) => {
        if (error) {
          console.error(error);
        }
        else {
          console.log(event);
        }
      });

      this.nft_address = nftABI[this.chainId].address;
      this.nftContract = new this.web3.eth.Contract(
        nftABI[this.chainId].abi,
        this.web3.utils.toChecksumAddress(this.nft_address)
      );
      
      this.getListingFee().then((c) => {
        this.listingFee = c;
      });

      this.getNFTsBySeller().then(async (nfts) => {
        this.sellerNFTs = await Promise.all(nfts.map(async (nft) => {
          let tokenURI = await this.nftContract.methods.tokenURI(nft.tokenId).call();
          let ipfs_data = await this.getFileFromIPFS(tokenURI);
          return {
              tokenId: nft.tokenId,
              price: nft.price,
              createAt: nft.createAt,
              metadata: ipfs_data,
          };
        }));
      });


      

    });
  },
  methods: {
    async addFileToIpfs(file) {
      const cid = await this.ipfs_client.add(file);
      return cid;
    },

    async removeCIDFromIpfs(_cid) {
      for await (const result of this.ipfs_client.block.rm(CID.parse(_cid))) {
        if (result.error) {
          console.error(`Failed to remove block ${result.cid} due to ${result.error.message}`)
        } else {
          console.log(`Removed block ${result.cid}`)
        }
      }
    },

    async getFileFromIPFS(cid) {
        try {
            // Get the file by CID
            const stream = this.ipfs_client.cat(CID.parse(cid));

            let chunks = [];
            for await (const chunk of stream) {
                // Convert each chunk to a string and concatenate
                chunks.push(chunk);
            }
            const content = new Blob(chunks);
            const text = await content.text();
            const data = JSON.parse(text);
            return data;
        } catch (error) {
            console.error('Error getting file from IPFS:', error);
            return null;
        }
    },

    async onFileChange(e) {
      const file = e.target.files[0]
      try {
        
        var reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        }
        reader.readAsDataURL(file);
        this.createNFT.file = file;
      }
      catch (e) {
        console.error(e)
      }
    },

    getFileSource(metadata) {
      return `${this.ipfs_gateway}${metadata.image.replace(IPFS_URI_PRE, '')}`;
    },

    async getCurrentWalletConnected() {
      if (window.ethereum) {
          try {
              const addressArray = await window.ethereum.request({
                  method: "eth_accounts",
              });
              if (addressArray.length > 0) {
                  return {
                      address: addressArray[0],
                      status: walletConnectionStatus.CONNECTED,
                  };
              } else {
                  return {
                      address: "",
                      status: walletConnectionStatus.DISCONNECTED,
                  };
              }
          } catch (err) {
              return {
                  address: "",
                  status: walletConnectionStatus.DISCONNECTED,
              };
          }
      } else {
        return {
            address: "",
            status: walletConnectionStatus.UNINSTALLED,
                
        };
      
      }
    },

    async connectWallet() {
      if (window.ethereum) {
          try {
              const addressArray = await window.ethereum.request({
                  method: "eth_requestAccounts",
              });
              const obj = {
                  status: walletConnectionStatus.CONNECTED,
                  address: addressArray[0],
              };
              return obj;
          } catch (err) {
              return {
                  address: "",
                  status: walletConnectionStatus.DISCONNECTED,
              };
          }
      } else {
          return {
              address: "",
              status: walletConnectionStatus.UNINSTALLED,
          };
      }
    },

    async OnConnectWalletClick() {
      let wallet = await this.connectWallet();
      this.walletAddress = wallet.address;
      this.status = wallet.status;
      this.balance = await this.getAccountBalance(wallet.address);
    },

    async getAccountBalance(address) {
      if (!address) {
        return 0;
      }
      const checksumAddress = this.web3.utils.toChecksumAddress(address);
      const balanceInWei = await this.web3.eth.getBalance(checksumAddress);
      const balanceInEther = this.web3.utils.fromWei(balanceInWei, "ether");
      return balanceInEther;
    },

    async getListingFee () {

      const listingFee = await this.marketContract.methods.getListingFee().call();
      return this.web3.utils.fromWei(listingFee, "ether");
    },

    async OnClickCreateNFT() {
      try {
        const { name, description, price, file } = this.createNFT;
        if (!name || !description || !price || !file) {
          return;
        }

        let cid = await this.addFileToIpfs(file);

        this.fileCIDCreated = cid;

        let metadata = {
          name: name,
          description: description,
          image: `${IPFS_URI_PRE}${cid.path}`,
        }

        let metadata_cid = await this.addFileToIpfs(JSON.stringify(metadata));
        
        this.metadataCIDCreated = metadata_cid;

        let nft_id = await this.nftContract.methods.createToken(metadata_cid.path).send({
          from: this.walletAddress,
        });
        let nft_price = this.web3.utils.fromWei(price, "wei");

        await this.marketContract.methods.createMarketItem(
          this.nft_address,
          nft_id.events.Transfer.returnValues.tokenId,
          nft_price,
        ).send({ from: this.walletAddress, value: this.web3.utils.toWei(this.listingFee, "ether") , gas: 3000000 });

        
        this.createNFT = { ...defaultNFTCreateData};
        this.previewImage = null;
        this.fileCIDCreated = null;
        this.metadataCIDCreated = null;
        
      }
      catch (e) {

        console.log(e)

        const cidValues=[];

        for await (const { cid, type } of this.ipfs_client.pin.ls({type: 'recursive'})) {
                  cidValues.push(cid.toString());
        }
        
        for ( let i=0 ; i <= cidValues.length -1; i++) {
          for await (const cid of this.ipfs_client.pin.rmAll(CID.parse(cidValues[i]))) {
            
          }
        }

        if(this.fileCIDCreated) {
          await this.removeCIDFromIpfs(this.fileCIDCreated.path);
          this.fileCIDCreated = null;
        }
        if(this.metadataCIDCreated) {
          await this.removeCIDFromIpfs(this.metadataCIDCreated.path);
          this.metadataCIDCreated = null;
        }
      }
    },

    async getNFTsBySeller() {
      let nfts = await this.marketContract.methods.getNFTBySeller().call();
      return nfts;
    },


  },
};

</script>