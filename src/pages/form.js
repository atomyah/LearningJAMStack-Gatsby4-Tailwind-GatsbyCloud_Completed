import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FormPage = () => (
    <Layout>
        <Seo title="お問い合わせ" />

        {/* コンテナ */}
        <div class="container w-full grid grid-cols-12 mx-auto gap-2">

         {/* 表題ブロック */}
            <div class="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
                お問い合わせ
            </div>

        {/* フォームブロック */}
            <div class="col-start-2 col-span-10 p-3">
                <form>
                    <div class="form-group mb-6">
                    <label for="formName" class="form-label inline-block mb-2 text-gray-700">お名前</label>
                        <input type="text" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white
                            border border-solid border-gray-300
                            rounded
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formName"
                            placeholder="例：鈴木太郎" />
                    </div>
                    <label for="formEmail" class="form-label inline-block mb-2 text-gray-700">メールアドレス</label>
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white
                            border border-solid border-gray-300
                            rounded
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formEmail"
                            placeholder="例：atom@yah-space.work" />
                    </div>
                    <label for="formTextarea" class="form-label inline-block mb-2 text-gray-700">メッセージ</label>
                    <div class="form-group mb-6">
                        <textarea
                        class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white
                            border border-solid border-gray-300
                            rounded
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="formTextarea"
                        rows="3"
                        placeholder=""
                        ></textarea>
                    </div>
                    <div class="form-group mb-12">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">添付ファイル</label>
                        <input class="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white
                            border border-solid border-gray-300
                            rounded
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                    </div>

                    <div class="form-group mb-2">
                        <button type="submit" class="
                            w-2/12
                            px-6
                            py-2.5
                            bg-blue-700
                            border-2
                            border-solid
                            border-indigo-600
                            text-white
                            font-medium
                            text-lg
                            leading-tight
                            rounded
                            shadow-md
                            hover:bg-indigo-400 hover:shadow-lg
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150">送 信</button>
                    </div>
                </form>

            </div>
        </div>
    </Layout>
)

export default FormPage
