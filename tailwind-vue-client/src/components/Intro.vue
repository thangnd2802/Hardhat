

<template>
    
    <div class="justify-start items-stretch gap-[30px] flex">
            <div class="max-w-[29rem] flex-col justify-between items-start gap-5 flex">
                <div class="self-stretch flex-col justify-start items-start gap-5 flex">
                    <div class=" text-white text-[38px] font-semibold font-work-sans capitalize leading-[45.60px]">Discover digital art & Collect NFTs</div>
                    <div class="self-stretch text-white text-base font-normal font-work-sans leading-snug">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
                </div>
                <div class="h-[60px] px-[50px] bg-purple-500 rounded-[20px] justify-center items-center gap-3 inline-flex">
                    <div class="w-5 h-5 relative"></div>
                    <div class="text-center text-white text-base font-semibold font-work-sans leading-snug">Get Started</div>
                </div>
                <div class="self-stretch rounded-[20px] justify-start items-start gap-[30px] inline-flex">
                    <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                        <div class="self-stretch text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">240k+ </div>
                        <div class="self-stretch text-white text-base font-normal font-work-sans leading-snug">Total Sale</div>
                    </div>
                    <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                        <div class="self-stretch text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">100k+</div>
                        <div class="self-stretch text-white text-base font-normal font-work-sans leading-snug">Auctions</div>
                    </div>
                    <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                        <div class="self-stretch text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">240k+</div>
                        <div class="self-stretch text-white text-base font-normal font-work-sans leading-snug">Artists</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-center border-r-[5px] bor border-[#DA8F4D] rounded-r-[181px]">
                <img class="rounded-tl-[20px] rounded-tr-[20px] max-h-[330px] mr-2" :src="image" />
            </div>
        </div>
    
  
  </template>
  
  <script type="text/javascript">
  import image from '@assets/red-dragon1.png';
  export default {
    name: "Intro",
    data() {
        return {
        image,
        };
  },
  };
  
  
  </script>



