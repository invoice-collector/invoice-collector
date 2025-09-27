
import { SketchCollector } from '../../sketchCollector';

export class HuggingfaceCollector extends SketchCollector {

    static CONFIG = {
        id: "huggingface",
        name: "Huggingface",
        description: "i18n.collectors.huggingface.description",
        version: "0",
        website: "https://huggingface.com/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131401.jpg",
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
        entryUrl: "https://huggingface.com/bills",
    }

    constructor() {
        super(HuggingfaceCollector.CONFIG);
    }
}
