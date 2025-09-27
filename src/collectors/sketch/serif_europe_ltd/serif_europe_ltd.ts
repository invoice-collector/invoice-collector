
import { SketchCollector } from '../../sketchCollector';

export class SerifEuropeLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "serif_europe_ltd",
        name: "Serif (Europe) Ltd",
        description: "i18n.collectors.serif_europe_ltd.description",
        version: "0",
        website: "https://store.serif.com/en-gb/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108438.jpg",
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
        entryUrl: "https://store.serif.com/en-gb/account/",
    }

    constructor() {
        super(SerifEuropeLtdCollector.CONFIG);
    }
}
