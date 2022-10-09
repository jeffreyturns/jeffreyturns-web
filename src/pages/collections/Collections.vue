<template>
    <div>
        <VRow>
            <VCol>
                <VCard
                    class="ma-1"
                    v-for="(it, i) in 5"
                    :key="i"
                    :max-height="400"
                    :max-width="400">
                    <VImg :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_${i}.png`" />
                </VCard>
            </VCol>
        </VRow>
    </div>
</template>
