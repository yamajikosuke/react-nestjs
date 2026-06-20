import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useFoodsStore } from "../store/useStore";
/**
 * 応用的なフォームバリデーションの例
 * https://qiita.com/y-suzu/items/170c3d9a0bb4b6b8e5f5
 *
 * チェックボックスのバリエーション
 * https://zenn.dev/cozynooks/articles/3b37cda72a7149
 *
 * */
const schema = z
    .object({
    screenName: z
        .string()
        .max(10, "最大文字数は10文字です")
        .min(5, {
        message: "5文字以上である必要があります。",
    })
        .min(1, { message: "必須項目です" }),
    number: z.string().regex(/^[0-9]+$/, {
        message: "半角数字で入力してください",
    }),
    english: z.string().regex(/^[A-Za-z]+$/, {
        message: "半角英字で入力してください",
    }),
    password: z
        .string()
        .nonempty({ message: "パスワードを入力してください" })
        .min(8, { message: "8桁以上のパスワードを入力してください" })
        .regex(/^[a-zA-Z0-9]+$/, {
        message: "英大文字、英小文字、数字で入力してください",
    }),
    passwordConfirm: z
        .string()
        .nonempty({ message: "確認用パスワードを入力してください" })
        .min(8, { message: "8桁以上のパスワードを入力してください" })
        .regex(/^[a-zA-Z0-9]+$/, {
        message: "英大文字、英小文字、数字で入力してください",
    }),
    agreePolicy: z.literal(true, { message: "同意してください" }),
})
    .refine((data) => data.password === data.passwordConfirm, {
    message: "パスワードと確認用パスワードが一致しません",
    path: ["passwordConfirm"],
});
const foodList = [
    {
        id: "sushi",
        label: "寿司",
    },
    {
        id: "curry",
        label: "カレー",
    },
    {
        id: "pizza",
        label: "ピザ",
    },
    {
        id: "other",
        label: "その他",
    },
];
export const UsersWithZod2 = () => {
    const { register, handleSubmit, reset, trigger, formState: { errors }, } = useForm({
        defaultValues: {
            screenName: "",
            number: "",
            english: "",
        },
        resolver: zodResolver(schema),
    });
    const foods = useFoodsStore((state) => state.checkedFoods);
    const setFoods = useFoodsStore((state) => state.setCheckedFoods);
    const [tmpFoods, setTmpFoods] = React.useState([]);
    //let tmpFoods: string[] = [];
    const handleRegister = async (data) => {
        await axios.post("/users/register", {
            screenName: data.screenName,
            password: data.number,
        });
        //    reset({ screenName: "", number: "" });
    };
    // console.log(errors.screenName);
    const handleClick = (e) => {
        setFoods([]);
        if (e.target.checked) {
            // e.target.valueがtmpFoods　に存在しない場合、tmpFoodsに追加する
            if (!tmpFoods.includes(e.target.value)) {
                tmpFoods.push(e.target.value);
                setTmpFoods(tmpFoods);
                // setTmpFoods([...tmpFoods, e.target.value]);
                console.log(" tmpFoods", tmpFoods);
                console.log("foods_2", foods);
                setFoods(tmpFoods);
            }
        }
        else {
            const newArray = tmpFoods.filter((n) => n !== e.target.value);
            console.log("newArray", newArray);
            setTmpFoods(newArray);
            setFoods(newArray);
        }
    };
    useEffect(() => {
        console.log("foods_1", foods);
    }, [foods]);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "UsersWithZod2"] }), foodList.map((food) => (_jsx("div", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", value: food.id, onChange: handleClick }), food.label] }) }, food.id))), _jsx("hr", {}), _jsxs("form", { onSubmit: handleSubmit(handleRegister), children: [_jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { className: errors.screenName ? "input is-danger" : "input", type: "text", ...register("screenName"), placeholder: "Text input", onBlur: () => trigger("screenName") }) }) }), _jsx("div", { style: { color: "red" }, children: errors.screenName?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("number"), className: errors.number ? "input is-danger" : "input", placeholder: "Input number", onBlur: () => trigger("number") }) }) }), _jsx("div", { style: { color: "red" }, children: errors.number?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("english"), className: errors.english ? "input is-danger" : "input", placeholder: "Input english", onBlur: () => trigger("english") }) }) }), _jsx("div", { style: { color: "red" }, children: errors.english?.message }), _jsx("hr", {}), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("password"), className: errors.password ? "input is-danger" : "input", placeholder: "Input password", onBlur: () => trigger("password") }) }) }), _jsx("div", { style: { color: "red" }, children: errors.password?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("passwordConfirm"), className: errors.passwordConfirm ? "input is-danger" : "input", placeholder: "Input password confirm", onBlur: () => trigger("passwordConfirm") }) }) }), _jsx("div", { style: { color: "red" }, children: errors.passwordConfirm?.message }), _jsx("hr", {}), _jsx("div", { className: "field", children: _jsxs("div", { className: "control", children: [_jsx("input", { ...register("agreePolicy"), type: "checkbox", placeholder: "Input agreePolicy", onBlur: () => trigger("agreePolicy") }), " ", "\u540C\u610F\u3059\u308B"] }) }), _jsx("div", { style: { color: "red" }, children: errors.agreePolicy?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", children: "register" }) }) })] })] }) }));
};
