import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Posts = ({ setPostId, }) => {
    const { data, status, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return data;
        },
    });
    if (status === "pending") {
        return _jsx("p", { children: "\u30ED\u30FC\u30C9\u4E2D..." });
    }
    if (error) {
        return _jsxs("p", { children: ["\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ", error.message] });
    }
    console.log(data);
    return (_jsxs("div", { children: [_jsx("h1", { children: "\u30DD\u30B9\u30C8\u4E00\u89A7" }), _jsx("div", { children: data.map((post) => (_jsx("p", { children: _jsx("a", { href: "javascript:void(0)", style: { fontWeight: "bold", color: "green" }, children: post.title }) }, post.id))) })] }));
};
export default Posts;
