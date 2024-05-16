// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    
    /**
     * 프로젝트에서 사용할 모듈 등록
     */
    modules: ['@vueuse/nuxt', '@pinia/nuxt', "@nuxtjs/tailwindcss"],

    components:[
        {
            path: '~/components',

            // components에 하위 폴더가 존재하면 하위 폴더명으로 컴포넌트명이 자동으로 생성 된다.
            // components/base/Button.vue 라면 컴포넌트의 이름은 BaseButton이 된다.
            // 추후에 중복 이름이 생길경우 찾아가기 힘들기 때문에 폴더명으로 이름이 생성되는 옵션인 pathPrefix를 false로 지정한다.
            // https://nuxt.com/docs/guide/directory-structure/components#component-names
            pathPrefix: false, 
        },
    ],

    typescript: {
        //nuxt 에서는 성능상의 이유로 타입스크립트를 검증하지 않는다.
        //빌드시에 타임 유형을 체크 하려면 true로 변경 한다. 단. 빌드 속도가 조금 느리다.
        //빌드 속도를 높이려면 false로 정의하여 타임 유형 체크를 하지 않는다.
        //이 옵션을 끄려면 개발자가 로컬환경에서 개발할 때 typecheck명령어를 실행하여 커밋하기전에 수시로 확인하도록 룰을 정한다.
        typeCheck: false
    },

    //pages 폴더에 컴포넌트를 생성하면 페이지 경로(URI)를 자동 생성한다.
    pages: true

})