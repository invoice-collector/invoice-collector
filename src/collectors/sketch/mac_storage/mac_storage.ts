
import { SketchCollector } from '../../sketchCollector';

export class MacStorageCollector extends SketchCollector {

    static CONFIG = {
        id: "mac_storage",
        name: "Mac-Storage",
        description: "i18n.collectors.mac_storage.description",
        version: "0",
        website: "https://www.mac-storage.de/Blog/Wartungsarbeiten",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7735.jpg",
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
        entryUrl: "https://www.mac-storage.de/Blog/Wartungsarbeiten",
    }

    constructor() {
        super(MacStorageCollector.CONFIG);
    }
}
