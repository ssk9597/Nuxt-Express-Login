<template>
    <div class="flex flex-col h-screen">
        <div class="bg-gray-100 flex-auto">
            <div class="flex justify-center mt-20">
                <div class="w-9/12 border bg-white">
                    <div class="my-16 text-center">
                        <h2 class="text-4xl font-bold">新規登録</h2>
                        <form @submit.prevent class="mt-12">
                            <div class="mb-3">
                                <input
                                    type="text"
                                    placeholder="ユーザー名"
                                    name="username"
                                    class="text-xl w-7/12 p-3 border rounded"
                                    v-model="user"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    placeholder="you@gmail.com"
                                    name="email"
                                    class="text-xl w-7/12 p-3 border rounded"
                                    v-model="email"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    placeholder="パスワード(7文字以上)"
                                    name="password"
                                    class="text-xl w-7/12 p-3 border rounded"
                                    v-model="password"
                                />
                            </div>
                            <button
                                type="submit"
                                class="text-xl w-4/12 bg-blue-800 text-white py-2 mt-3 rounded hover:opacity-75"
                                @click="createRegister()"
                            >
                                登録
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: '',
            email: '',
            password: '',
        };
    },
    methods: {
        // createRegister() {
        //     console.log('送信されました');
        //     this.$router.push('users');
        // },
        async createRegister() {
            await axios
                .post('/api/register', {
                    user: this.user,
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    this.$router.push('users');
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped></style>
