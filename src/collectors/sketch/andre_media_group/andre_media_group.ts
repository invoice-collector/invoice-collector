
import { SketchCollector } from '../../sketchCollector';

export class AndreMediaGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "andre_media_group",
        name: "Andre Media Group",
        description: "i18n.collectors.andre_media_group.description",
        version: "0",
        website: "https://portal.andre-media.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/100952.jpg",
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
        entryUrl: "https://portal.andre-media.de/",
    }

    constructor() {
        super(AndreMediaGroupCollector.CONFIG);
    }
}
