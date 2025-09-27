
import { SketchCollector } from '../../sketchCollector';

export class PublicStorageCollector extends SketchCollector {

    static CONFIG = {
        id: "public_storage",
        name: "Public Storage",
        description: "i18n.collectors.public_storage.description",
        version: "0",
        website: "http://www.publicstorage.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8841.jpg",
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
        entryUrl: "http://www.publicstorage.com",
    }

    constructor() {
        super(PublicStorageCollector.CONFIG);
    }
}
