import {
    StyledA,
    StyledBlockQuote,
    StyledCode,
    StyledH1,
    StyledH2,
    StyledH3,
    StyledP,
    StyledStrong,
} from "@/components/mdx";
import { Chip, Stack } from "@mui/material";

export const additionalComponents = {
    Chip: Chip,
    Stack: Stack
}

export const genericBlogComponents = {
    p: StyledP,
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    a: StyledA,
    strong: StyledStrong,
    blockquote: StyledBlockQuote,
    code: StyledCode,
    ...additionalComponents
};
