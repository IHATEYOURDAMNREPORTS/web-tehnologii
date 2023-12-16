<template>
    <div class="items-center justify-center flex w-full">
    <div class="w-[50%] h-[4423px] relative bg-white">
      <div class="h-[830px] left-0 top-[1px] absolute bg-white flex-col
      justify-start items-start inline-flex">
        <div class="w-[1440px] h-[156px] relative">
          <div class="px-5 left-[70px] top-[26.12px] absolute flex-col justify-start
          items-center inline-flex">
            <img alt="a" class="w-[206px] h-[101.76px]"
            src="@/assets/8.png" />
          </div>
          <div class="left-[820px] top-[53px] absolute justify-start items-center
          gap-[77px] inline-flex">
            <div class="justify-start items-center gap-[94px] flex">
              <div class="p-2.5 justify-start items-center gap-2.5 flex">
                <div class="text-center text-orange-600 text-base font-semibold
                font-['Montserrat'] leading-7 tracking-tight">Home</div>
              </div>
              <div class="p-2.5 justify-start items-center gap-2.5 flex">
                <div class="text-center text-slate-800 text-base font-semibold
                font-['Montserrat'] leading-7 tracking-tight">Product</div>
              </div>
              <div class="p-2.5 justify-start items-center gap-2.5 flex">
                <div class="text-center text-slate-800 text-base font-semibold
                font-['Montserrat'] leading-7 tracking-tight">Faq</div>
              </div>
              <div class="p-2.5 justify-start items-center gap-2.5 flex">
                <div class="text-center text-slate-800 text-base font-semibold
                font-['Montserrat'] leading-7 tracking-tight">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[1440px] h-[674px] relative">
          <div class="w-[1440px] h-[619px] left-0 top-[-1px] absolute bg-neutral-900
          bg-opacity-60 flex-shrink-0 bg-cover bg-no-repeat bg-[url('Rectangle48.png')]"></div>
          <div class="w-[1005px] h-[326px] left-[217.50px] top-[72px] absolute">
            <div class="left-[443px] top-0 absolute text-center text-neutral-100
            text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">Food
            app</div>
            <div class="w-[1005px] h-[180px] left-0 top-[43px] absolute">
              <div class="left-[34px] top-[10px] absolute text-center text-white
              text-[58px] font-bold font-['Poppins'] leading-[80px]
              tracking-tight">Why stay hungry when <br/>you can order form Bella
              Onojie</div>
            </div>
            <div class="w-[728px] h-24 left-[138.50px] top-[230px] absolute">
              <div class="left-[89px] top-[10px] absolute text-center
              text-neutral-100 text-2xl font-medium font-['Montserrat']
              leading-[38px] tracking-tight">Download the bella onoje’s food app now
              on</div>
            </div>
          </div>
          <div class="left-[791px] top-[404px] absolute flex-col justify-start
          items-center inline-flex">
            <div class="h-[68px] py-4 rounded-[30px] border border-white flex-col
            justify-start items-center flex">
              <div class="w-[119px] h-9 relative">
                <button @click="showAlert" class="left-0 top-0 absolute
                text-white text-2xl font-bold font-['Montserrat'] leading-9
                tracking-tight">App store</button>
              </div>
            </div>
          </div>
          <div class="left-[521px] top-[404px] absolute flex-col justify-start
          items-center inline-flex">
            <div class="h-[68px] py-4 bg-orange-600 rounded-[30px] shadow flex-col
            justify-start items-center flex">
              <div class="w-[119px] h-9 relative">
                <button @click="showAlert" class="left-0 top-0 absolute
                text-white text-2xl font-bold font-['Montserrat'] leading-9
                tracking-tight">Playstore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-[446px] top-[610px] absolute">
        <img alt="a" class="left-[263px] top-[109px] absolute"
        src="@/assets/7.png" />
        <img alt="a" class="h-[586px] w-[300px] drop-shadow-ps" src="@/assets/6.png"/>
      </div>
      <div class="w-[884px] h-[0px] left-[278px] top-[1378.91px] absolute border-2
      border-neutral-200"></div>
      <div class="w-[1440px] h-[806.99px] left-0 top-[1546px] absolute bg-white">
        <div class="w-[1640.59px] h-[506.99px] left-[-282.59px] top-[150px]
        absolute">
          <div class="h-[280px] left-[1000.58px] top-[83px] absolute flex-col
          justify-start items-start gap-[70px] inline-flex">
            <div class="h-[280px] flex-col justify-start items-start gap-[7px]
            flex">
              <div class="justify-start items-center inline-flex">
                <div class="text-orange-600 text-2xl font-bold font-['Montserrat']
                leading-9 tracking-tight">Create an account</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-slate-800 text-[40px] font-bold font-['Montserrat']
                leading-[57px] tracking-tight">Create/login to an
                existing<br/>account to get started</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-500 text-2xl font-medium
                font-['Montserrat'] leading-[38px] tracking-tight">An account is
                created with your email<br/>and a desired password</div>
              </div>
            </div>
          </div>
        </div>
        <img alt="a" class="w-[302px] h-[525px] left-[245px] top-[78px] absolute drop-shadow-psx"
        src="@/assets/5.png" />
      </div>
      <div class="w-[1440px] h-[806.99px] left-0 top-[2935px] absolute bg-white">
        <div class="w-[1640.59px] h-[506.99px] left-[-282.59px] top-[150px]
        absolute">
          <div class="h-[280px] left-[1000.58px] top-[83px] absolute flex-col
          justify-start items-start gap-[70px] inline-flex">
            <div class="h-[280px] flex-col justify-start items-start gap-[7px]
            flex">
              <div class="justify-start items-center inline-flex">
                <div class="text-orange-600 text-2xl font-bold font-['Montserrat']
                leading-9 tracking-tight">Checkout</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-slate-800 text-[40px] font-bold font-['Montserrat']
                leading-[57px] tracking-tight">When you done check out<br/>and get
                it delivered.</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-500 text-2xl font-medium
                font-['Montserrat'] leading-[38px] tracking-tight">When you done
                check out and get it <br/>delivered with ease.</div>
              </div>
            </div>
          </div>
        </div>
        <img alt="a" class="w-[278px] h-[511px] left-[245px] top-[81px] absolute drop-shadow-psx"
        src="@/assets/3.png" />
      </div>
      <div class="w-[1440px] h-[806.99px] left-0 top-[2202px] absolute bg-white">
        <div class="w-[1640.59px] h-[506.99px] left-[-282.59px] top-[150px]
        absolute">
          <div class="h-[280px] left-[536.58px] top-[88px] absolute flex-col
          justify-start items-start gap-[70px] inline-flex">
            <div class="h-[280px] flex-col justify-start items-start gap-[7px]
            flex">
              <div class="justify-start items-center inline-flex">
                <div class="text-orange-600 text-2xl font-bold font-['Montserrat']
                leading-9 tracking-tight">Explore varieties</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-slate-800 text-[40px] font-bold font-['Montserrat']
                leading-[57px] tracking-tight">Shop for your favorites<br/>meal as e
                dey hot.</div>
              </div>
              <div class="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-500 text-2xl font-medium
                font-['Montserrat'] leading-[38px] tracking-tight">Shop for your
                favorite meals or drinks<br/>and enjoy while doing it.</div>
              </div>
            </div>
          </div>
        </div>
        <img alt="a" class="w-[269px] h-[525px] left-[939px] top-[78px] absolute drop-shadow-psx"
        src="@/assets/4.png" />
      </div>
      <div class="w-[1440px] h-[509px] left-0 top-[3689.90px] absolute
      bg-slate-800 flex-shrink-0 bg-cover bg-no-repeat bg-[url('Rectangle47.png')]">
        <div class="w-[1440px] h-[516px] left-0 top-[-5.90px] absolute bg-slate-800
        bg-opacity-40"></div>
        <div class="left-[290px] top-[130px] absolute flex-col justify-start
        items-center inline-flex">
          <div class="p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-[40px] font-bold
            font-['Montserrat'] leading-[57px] tracking-tight">Download the app
            now.</div>
          </div>
          <div class="p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-2xl font-medium
            font-['Montserrat'] leading-[38px] tracking-tight">Available on your
            favorite store. Start your premium experience now</div>
          </div>
        </div>
        <div class="left-[554.50px] top-[315px] absolute flex-col justify-start
        items-start gap-0.5 inline-flex">
          <div class="justify-start items-center gap-4 inline-flex">
            <div class="px-[31px] py-[18px] bg-orange-600 rounded-[10px] flex-col
            justify-start items-center gap-2.5 inline-flex">
              <div class="justify-start items-center gap-2.5 inline-flex">
                <button @click="showAlert" class="text-white text-base font-bold font-['Montserrat']
                leading-7 tracking-tight">Playstore</button>
              </div>
            </div>
            <div class="px-[45px] py-4 rounded-[10px] border border-white flex-col
            justify-start items-center gap-2.5 inline-flex">
              <div class="justify-start items-center gap-2.5 inline-flex">
                <button @click="showAlert" class="text-white text-base font-bold font-['Montserrat']
                leading-7 tracking-tight">App store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1210px] h-[133px] left-[115px] top-[4236.90px] absolute
      bg-white">
        <div class="w-[206px] h-[78px] left-[91.50px] top-[28px] absolute">
          <img alt="a" class="w-[246px] h-[102px] left-[-20.50px] top-[-11.90px] absolute"
          src="@/assets/9.png" />
        </div>
        <div class="px-2.5 left-[965px] top-[64px] absolute justify-start
        items-center gap-2.5 inline-flex">
          <div class="text-right text-zinc-600 text-xs font-bold font-['Roboto']
          leading-[18px] tracking-tight">Copywright 2020 Bella Onojie.com</div>
        </div>
        <div class="left-[520px] top-[46px] absolute justify-start items-center
        gap-6 inline-flex">
          <div class="w-[40.99px] h-[40.99px] relative
          bg-[url('ant-design_twitter-outlined.svg')]"></div>
          <div class="w-[40.99px] h-[40.99px] relative
          bg-[url('ant-design_facebook-filled.svg')]"></div>
          <div class="w-[40.99px] h-[40.99px] relative
          bg-[url('instagram.svg')]"></div>
        </div>
        <div class="w-[39px] h-[39px] left-[650px] top-[47.10px] absolute"></div>
      </div>
      <div class="left-[495px] top-[1451px] absolute opacity-80 text-black
      text-[44px] font-semibold font-['Poppins'] leading-9 tracking-tight">How the
      app works</div>
    </div>
    </div>
    </template>

<script>
export default {
  name: 'WORK_2',
  data() {
    return {
      userName: null,
    };
  },
  methods: {
    showAlert() {
      if (this.userName) {
        this.$swal(
          `Я это сделал, а ${this.userName} тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!`,
        );
      } else {
        this.$swal({
          title: 'Как тебя зовут?',
          input: 'text',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ОК',
          cancelButtonText: 'Отмена',
        }).then((result) => {
          if (result.value) {
            this.userName = result.value;
            this.$swal(
              `Я это сделал, а ${this.userName} тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!`,
            );
          }
        });
      }
    },
  },
};
</script>
