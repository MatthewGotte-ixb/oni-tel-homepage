<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Mail, Phone, LoaderCircle } from 'lucide-vue-next';
import { z } from 'zod';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { AutoForm } from "@/components/ui/auto-form";
import { useToast } from '@/components/ui/toast/use-toast'
import { ref } from "vue";

const {toast} = useToast()
const isSendingEmail = ref<boolean>(false)

const schema = z.object({
    fullName: z.string({message: 'Please enter your full name'}),
    emailAddress: z.string({message: 'Please enter a valid email address'}).email(),
})

const form = useForm({
    validationSchema: toTypedSchema(schema),
})

const handleSubmit = (data: any) => {
    if (isSendingEmail.value)
        return

    const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const payload = {
        ...data,
        date: new Date().toLocaleString(),
    }

    isSendingEmail.value = true
    //@ts-ignore
    emailjs.send(serviceId, templateId, payload)
        .then(() => {
            toast({
                title: `Thank you, ${data.fullName}!`,
                description: 'We will be in touch soon.',
            })
        }, () => {
            toast({
                title: 'Something went wrong!',
                description: 'Please try again.',
                variant: 'destructive'
            })
        })
        .finally(() => {
            isSendingEmail.value = false
        })
}
</script>

<template>
    <img class="absolute z-[-10] w-full h-[90svh] hidden md:block" src="/images/desktop_background.png" alt=""/>
    <img class="absolute z-[-10] h-[100svh] w-[100vw] md:hidden" src="/images/mobile_background.png" alt=""/>

    <div class="container py-6 md:py-10 flex flex-col h-[100svh] justify-between">
        <div>
            <img src="/logos/logo.png" alt="" class="h-[8svh]"/>
        </div>

        <div class="flex flex-col gap-6 w-fit">
            <div class="flex flex-col gap-2">
                <div class="font-semibold text-3xl md:text-4xl text-[#006699]">Get ready for<br
                        class="block md:hidden"/> the next stage!
                </div>
                <div class="text-muted-foreground">
                    It's time to elevate your fibre with cutting-edge<br class="hidden md:block"/>
                    technology designed<br class="block md:hidden"/> for a modern ecosystem.<br/>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="font-semibold text-lg text-[#006699]">Let's get you connected!</div>
                <div>
                    <AutoForm :form="form"
                              :schema="schema"
                              class="flex flex-col gap-2"
                              @submit="handleSubmit"
                              :field-config="{
                                fullName: {
                                  hideLabel: true,
                                  inputProps: {
                                    placeholder: 'Full Name',
                                    size: 33,
                                  },
                                },
                                emailAddress: {
                                  hideLabel: true,
                                  inputProps: {
                                    placeholder: 'your@email.com',
                                    size: 33,
                                  },
                                }
                              }">
                        <div class="mt-2 w-full flex justify-end">
                            <Button type="submit" class="hover:bg-accent min-w-[135px]">
                                <span v-if="!isSendingEmail">
                                    Contact Me
                                </span>
                                <span v-else>
                                    <LoaderCircle class="animate-spin" />
                                </span>
                            </Button>
                        </div>
                    </AutoForm>
                </div>

            </div>
            <div class="flex flex-col gap-2 text-[#006699]">
                <div class="flex flex-row item-center gap-3">
                    <Mail class="size-4 stroke-[1.6px] mt-1"/>
                    <a href="mailto: info@onitel.co.za" class="underline decoration-thin">info@onitel.co.za</a>
                </div>
                <div class="flex flex-row items-center gap-3">
                    <Phone class="size-4 stroke-[1.6px] mt-1"/>
                    <a href="tel: +27 10 491 4050" class="underline decoration-thin">+27 10 491 4050</a>
                </div>
            </div>
            <div class="flex flex-row gap-2 items-center text-[#006699]">
            </div>
        </div>

        <div class="text-sm text-muted-foreground">© 2024 ONI-TEL</div>
    </div>
</template>

<style scoped>

</style>