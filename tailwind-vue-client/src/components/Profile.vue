<template>
    <div class="w-full flex-col inline-flex justify-center items-center pb-20">
        <div class="w-fit bg-[#0000004d]  border-[#00000099] border-[0.5px] rounded-[20px] shadow-sm shadow-[#00000099] max-w-[1450px] flex flex-col">
            <div class="self-stretch flex-col justify-start items-center flex">
                <img :src="image" class="rounded-tl-[20px] rounded-tr-[20px] w-full h-[350px] object-cover" />
            </div>
            <div class="self-stretch py-10 flex-col justify-start items-center gap-[30px] flex">
                <div class="w-[80%] flex-col justify-start items-start gap-[30px] flex">
                            <div class="flex justify-start items-start w-full mt-[-100px]">
                                <div class="rounded-[20px] border-2 border-zinc-800 justify-start items-start gap-2.5 flex">
                                    <div class="w-[120px] h-[120px] justify-center items-center flex">
                                        <img class="w-[120px] h-[120px] rounded-[20px]" src="https://via.placeholder.com/120x120" />
                                    </div>
                                </div>
                            </div>

                            <div class="text-white text-[51px] font-semibold font-['Work Sans'] capitalize leading-[56.10px] w-full flex flex-row justify-between">
                                <p>Fejzik rich</p>
                                <div class="h-[60px] px-[30px] rounded-[20px] border-2 border-purple-500 justify-center items-center gap-3 inline-flex cursor-pointer" onclick="createNFTForm.showModal()">
                                    <img :src="AddLogo" class="h-5 w-5">
                                    <div class="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Create NFT</div>
                                </div>
                            </div>
                            <div class="rounded-[20px] justify-start items-start gap-5 w-full flex flex-row">
                                <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                                    <div class="self-stretch text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">250k+</div>
                                    <div class="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">Volume</div>
                                </div>
                                <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                                    <div class="self-stretch text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">50+</div>
                                    <div class="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">NFTs Sold</div>
                                </div>
                                <div class="grow shrink basis-0 rounded-[20px] flex-col justify-start items-start inline-flex">
                                    <div class="self-stretch text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">3000+</div>
                                    <div class="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">Followers</div>
                                </div>
                            </div>
                            <div class="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
                                <div class="self-stretch text-zinc-500 text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Bio</div>
                                <div class="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">The internet's friendliest designer kid.</div>
                            </div>
                </div>
            </div>
            <div class="self-stretch h-[70px] flex-col justify-start items-center gap-2.5 flex">
                <div class="self-stretch h-[0px] border border-neutral-700"></div>
                <div class="w-[1050px] justify-start items-start inline-flex">
                    <div class="grow shrink basis-0 h-[60px] justify-start items-start flex">
                        <div class="grow shrink basis-0 h-[60px] px-[30px] border-b-2 border-zinc-500 justify-center items-center gap-4 flex">
                            <div class="text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Created</div>
                            <div class="px-2.5 py-[5px] bg-zinc-500 rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div class="text-white text-base font-normal font-['Space Mono'] leading-snug">302</div>
                            </div>
                        </div>
                        <div class="grow shrink basis-0 h-[60px] px-[30px] justify-center items-center gap-4 flex">
                            <div class="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">owned</div>
                            <div class="px-2.5 py-[5px] bg-neutral-700 rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div class="text-white text-base font-normal font-['Space Mono'] leading-snug">67</div>
                            </div>
                        </div>
                        <div class="grow shrink basis-0 h-[60px] px-[30px] justify-center items-center gap-4 flex">
                            <div class="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Collection</div>
                            <div class="px-2.5 py-[5px] bg-neutral-700 rounded-[20px] justify-start items-center gap-2.5 flex">
                                <div class="text-white text-base font-normal font-['Space Mono'] leading-snug">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch py-20 flex-wrap  items-center gap-[30px] flex">
                    <NftItem />
                    <NftItem />
                    <NftItem />
            </div>
        </div>
    </div>
    <NftForm />
</template>

<script  type="text/javascript">
import image from '@assets/beautiful-mountains-landscape.jpg'
import AddLogo from '@assets/icons/add.svg'
import NftItem from './NftItem.vue';
import NftForm from './NftForm.vue';
export default {
  name: "Profile",
  components : {
    NftItem,
    NftForm
  },
  data() {
  return {
    image,
    AddLogo
    };
  },

};
</script>