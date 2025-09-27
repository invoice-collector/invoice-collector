
import { SketchCollector } from '../../sketchCollector';

export class DiscoversnoopCollector extends SketchCollector {

    static CONFIG = {
        id: "discoversnoop",
        name: "DiscoverSnoop",
        description: "i18n.collectors.discoversnoop.description",
        version: "0",
        website: "https://app.discoversnoop.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553689.jpg",
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
        entryUrl: "https://app.discoversnoop.com/login",
    }

    constructor() {
        super(DiscoversnoopCollector.CONFIG);
    }
}
