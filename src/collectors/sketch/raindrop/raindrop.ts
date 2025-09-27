
import { SketchCollector } from '../../sketchCollector';

export class RaindropCollector extends SketchCollector {

    static CONFIG = {
        id: "raindrop",
        name: "Raindrop",
        description: "i18n.collectors.raindrop.description",
        version: "0",
        website: "https://raindrop.onfastspring.com/account/v0iOIrtqQCaoR0giOKLqkA/zX6n0mAkT2M",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1334125.jpg",
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
        entryUrl: "https://raindrop.onfastspring.com/account/v0iOIrtqQCaoR0giOKLqkA/zX6n0mAkT2M",
    }

    constructor() {
        super(RaindropCollector.CONFIG);
    }
}
