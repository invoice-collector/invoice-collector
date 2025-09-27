
import { SketchCollector } from '../../sketchCollector';

export class StoryblocksCollector extends SketchCollector {

    static CONFIG = {
        id: "storyblocks",
        name: "Storyblocks",
        description: "i18n.collectors.storyblocks.description",
        version: "0",
        website: "https://www.storyblocks.com/member/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409420.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.storyblocks.com/member/billing",
    }

    constructor() {
        super(StoryblocksCollector.CONFIG);
    }
}
