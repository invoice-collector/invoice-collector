
import { SketchCollector } from '../../sketchCollector';

export class LazymerchCollector extends SketchCollector {

    static CONFIG = {
        id: "lazymerch",
        name: "LazyMerch",
        description: "i18n.collectors.lazymerch.description",
        version: "0",
        website: "https://www.lazymerch.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797157.jpg",
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
        entryUrl: "https://www.lazymerch.com/my-account/",
    }

    constructor() {
        super(LazymerchCollector.CONFIG);
    }
}
