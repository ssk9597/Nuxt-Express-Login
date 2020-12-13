<template>
    <div class="flex flex-col h-screen">
        <div class="bg-gray-100 flex-auto">
            <div class="flex justify-center mt-20">
                <div class="w-9/12 border bg-white">
                    <div class="my-16 text-center">
                        <h2 class="text-4xl font-bold">新規登録</h2>
                        <form class="mt-12">
                            <div class="mb-3">
                                <input
                                    type="text"
                                    placeholder="ユーザー名"
                                    name="username"
                                    class="text-xl w-7/12 p-3 border rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    placeholder="you@gmail.com"
                                    name="email"
                                    class="text-xl w-7/12 p-3 border rounded"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    placeholder="パスワード(7文字以上)"
                                    name="password"
                                    class="text-xl w-7/12 p-3 border rounded"
                                />
                            </div>
                            <div class="mb-8">
                                <input
                                    type="password"
                                    placeholder="パスワードの確認"
                                    name="confirmPassword"
                                    class="text-xl w-7/12 p-3 border rounded"
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
    methods: {
        async createRegister() {
            await axios.post('/api/register').then(res => console.log(res));
        },
    },
};
</script>

<style scoped></style>
