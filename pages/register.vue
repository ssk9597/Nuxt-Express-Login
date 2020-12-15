<template>
    <div class="flex flex-col h-screen">
        <div class="bg-gray-100 flex-auto">
            <div class="flex justify-center mt-20">
                <div class="w-9/12 border bg-white">
                    <div class="my-16 text-center">
                        <h2 class="text-4xl font-bold">新規登録</h2>
                        <ValidationObserver v-slot="{ invalid }">
                            <form @submit.prevent="createRegister()" class="mt-12">
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <div class="mb-3">
                                        <input
                                            type="text"
                                            placeholder="ユーザー名"
                                            name="ユーザー名"
                                            class="text-xl w-7/12 p-3 border rounded"
                                            v-model="user"
                                        />
                                        <div class="pt-1 text-red-700 font-bold" id="error">
                                            {{ errors[0] }}
                                        </div>
                                    </div>
                                </ValidationProvider>

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
                                    <div class="mb-3">
                                        <input
                                            type="password"
                                            placeholder="パスワード(7文字以上)"
                                            name="パスワード"
                                            class="text-xl w-7/12 p-3 border rounded"
                                            v-model="password"
                                        />
                                        <div class="pt-1 text-red-700 font-bold" id="error">
                                            {{ errors[0] }}
                                        </div>
                                    </div>
                                </ValidationProvider>

                                <button
                                    type="submit"
                                    class="text-xl w-4/12 bg-blue-800 text-white py-2 mt-3 rounded hover:opacity-75"
                                    :disabled="invalid"
                                >
                                    登録
                                </button>
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
            user: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async createRegister() {
            await axios
                .post('/api/register', {
                    user: this.user,
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    console.log(res.data);
                    axios
                        .post('/api/login', {
                            email: this.email,
                            password: this.password,
                        })
                        .then(res => {
                            this.$router.push('/');
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped></style>
