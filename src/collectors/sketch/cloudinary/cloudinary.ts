
import { SketchCollector } from '../../sketchCollector';

export class CloudinaryCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudinary",
        name: "Cloudinary",
        description: "i18n.collectors.cloudinary.description",
        version: "0",
        website: "https://cloudinary.com/console/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8788.jpg",
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
        entryUrl: "https://cloudinary.com/console/settings/billing",
    }

    constructor() {
        super(CloudinaryCollector.CONFIG);
    }
}
