

<template>
    <div class="w-full pb-5 justify-center items-center gap-[15px] flex flex-col">
        <Intro />
    </div>
    <div class="w-full h-fit py-2 flex-col justify-start items-center gap-2.5 inline-flex">
        <div class="self-stretch h-[0px] border border-neutral-700"></div>
        <div class="w-auto justify-start items-start inline-flex">
            <div class="h-[60px] justify-start items-start flex gap-5">
                <div class="h-[60px] px-2.5 hover:border-b-2 border-zinc-500 justify-center items-center gap-4 flex cursor-pointer"
                :class="{ 'border-b-2 cursor-default': currentTab === TabRender.NftMarket }"
                @click="currentTab = TabRender.NftMarket"
                >
                    <div class="text-center text-base font-semibold font-work-sans capitalize leading-snug"
                        :class="{ 'text-white': currentTab === TabRender.NftMarket }"
                    >NFTs Market</div>
                </div>
                <div class="h-[60px] px-2.5 hover:border-b-2 border-zinc-500 justify-center items-center gap-4 flex cursor-pointer"
                :class="{ 'border-b-2 cursor-default': currentTab === TabRender.NftCollection }"
                @click="currentTab = TabRender.NftCollection"
                >
                    <div class="text-center text-base font-semibold font-work-sans capitalize leading-snug"
                        :class="{ 'text-white': currentTab === TabRender.NftCollection }"
                    >Collections</div>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-[1500px] max-h-[1600px] pt-[20px] px-[2rem] pb-20 flex-wrap justify-center items-center gap-[30px] flex self-center">
          <router-link :to="{ name: 'NftDetail', params: { id: '123456' } }">
            <NftItem />
          </router-link>
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
          <NftItem />
    </div>
        
      
</template>
      
<script type="text/javascript">

let TabRender = {
    NftMarket : "NFT",
    NftCollection : "COLLECTION",
}

import NftItem from "./NftItem.vue";
import Intro from "./Intro.vue";
      
      export default {
        name: "NftMarket",
        components: {
            NftItem,
            Intro,
        },
        data() {
            return {
                TabRender,
                currentTab: TabRender.NftMarket,
            };
        },
      };
      
      
</script>
    
    