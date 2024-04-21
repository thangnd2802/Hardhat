<template>
    <dialog id="createNFTForm" class="modal">
        <div class="modal-box md:max-w-[1050px] max-w-fit flex md:flex-row flex-col gap-10 justify-between items-center py-0 px-0">
            <img class="md:block hidden self-stretch max-w-[50%] object-cover rouned-tl-[16px] rouned-bl-[16px]" :src="createNftImg" />
            <img class="md:hidden block self-stretch object-cover rouned-tl-[16px] rouned-bl-[16px]" :src="createNftImgH" />
            <div class="flex-col justify-center px-5 items-center gap-[20px] py-5 flex">
                <div class="self-stretch flex-col justify-start items-start gap-5 flex">
                    <div class="self-stretch flex-col justify-start items-start gap-5 flex">
                        <div class="self-stretch justify-start items-start gap-2.5 inline-flex">
                            <div class="grow shrink basis-0 text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">Create NFTs</div>
                            <div class="modal-action justify-start items-start mt-0">
                                <form method="dialog">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div class="self-stretch flex-col justify-start items-start gap-2.5 flex">
                            <div class="self-stretch text-white text-base font-normal font-['Work Sans'] leading-snug">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                        </div>
                    </div>
                </div>
                <div class="self-stretch flex-col justify-start items-between gap-[15px] flex">
                    
                    <div class="flex flex-auto gap-5">
                    <input type="text" placeholder="Asset name" class="input input-bordered input-info w-full" 
                        :value="createNFT.name"
                        @input="event => createNFT.name = event.target.value"
                      />

                      <input type="number" placeholder="Price" class="input input-bordered input-warning max-w-[85px]" 
                        :value="createNFT.price"
                        @input="event => createNFT.price = event.target.value"
                      />
                    </div>

                      <textarea class="textarea textarea-accent w-full" placeholder="Asset description"
                        :value="createNFT.description"
                        @input="event => createNFT.description = event.target.value"
                      ></textarea>
                      
                      <div class="flex items-center justify-center w-full border-2 border-secondary border-dashed rounded-lg">
                        
                        <div v-if="createNFT.file" class="fbg-gray-700">
                          <img class="h-auto max-w-full rounded-lg" :src="previewImage" alt="image description">
                        </div>
                        
                        <label v-else for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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

                    <div class="self-stretch h-[46px] px-[50px] bg-purple-500 rounded-[20px] justify-center items-center gap-3 inline-flex">
                        <div class="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Create NFT</div>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
</template>
<script  type="text/javascript">
import createNftImg from "@assets/createNftImg.png";
import createNftImgH from "@assets/createNftImgH.png";

const defaultNFTCreateData = {
  name: "",
  description: "",
  price: 0,
  file: null,
};
export default {
  name: "NftForm",
  data() {
  return {
    createNftImg,
    createNftImgH,
    createNFT: { ...defaultNFTCreateData},
    };
  },

};
</script>