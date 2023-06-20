/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as FernWebsite from "../../../../../../api";
import * as core from "../../../../../../core";

export const BlogPost: core.serialization.ObjectSchema<
    serializers.fixtures.BlogPost.Raw,
    FernWebsite.fixtures.BlogPost
> = core.serialization.object({
    slug: core.serialization.lazy(async () => (await import("../../../../..")).fixtures.BlogPostSlug),
    author: core.serialization.string(),
    title: core.serialization.string(),
    image: core.serialization.string().optional(),
    publicationeDate: core.serialization.property("publicatione-date", core.serialization.date()),
    richtext: core.serialization.string().optional(),
});

export declare namespace BlogPost {
    interface Raw {
        slug: serializers.fixtures.BlogPostSlug.Raw;
        author: string;
        title: string;
        image?: string | null;
        "publicatione-date": string;
        richtext?: string | null;
    }
}
