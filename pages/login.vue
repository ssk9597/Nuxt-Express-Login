<template>
    <div class="flex flex-col h-screen">
        <div class="bg-gray-100 flex-auto">
            <div class="flex justify-center mt-20">
                <div class="w-9/12 border bg-white">
                    <div class="my-16 text-center">
                        <h2 class="text-4xl font-bold">ログイン</h2>
                        <ValidationObserver v-slot="{ invalid }">
                            <form @submit.prevent="login()" class="mt-12">
                                <ValidationProvider rules="required|email" v-slot="{ errors }">
                                    <div class="mb-3">
                                        <input
                                            type="email"
                                            placeholder="you@gmail.com"
                                            name="メールアドレス"
                                            class="text-xl w-7/12 p-3 border rounded"
                                            v-model="email"
                                        />
                                        <div class="pt-1 text-red-700 font-bold" id="error">
                                            {{ errors[0] }}
                                        </div>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider rules="required|min:7" v-slot="{ errors }">
                                    <div class="mb-5">
                                        <input
                                            type="password"
                                            placeholder="パスワード"
                                            name="パスワード"
                                            class="text-xl w-7/12 p-3 border rounded"
                                            v-model="password"
                                        />
                                        <div class="pt-1 text-red-700 font-bold" id="error">
                                            {{ errors[0] }}
                                        </div>
                                    </div>
                                </ValidationProvider>

                                <div class="mb-5">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox" />
                                        <span class="ml-2 text-sm">ログインデータを保存する</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    class="mb-3 text-xl w-4/12 bg-blue-800 text-white py-2 rounded hover:opacity-75"
                                    :disabled="invalid"
                                >
                                    ログイン
                                </button>
                                <div class="text-sm hover:text-blue-800">
                                    <a href="/register"> 新規登録はこちらから </a>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            await axios
                .post('/api/login', {
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    this.$router.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
};
</script>

<style></style>
