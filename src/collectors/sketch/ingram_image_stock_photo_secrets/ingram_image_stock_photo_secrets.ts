
import { SketchCollector } from '../../sketchCollector';

export class IngramImageStockPhotoSecretsCollector extends SketchCollector {

    static CONFIG = {
        id: "ingram_image_stock_photo_secrets",
        name: "Ingram Image/Stock Photo Secrets",
        description: "i18n.collectors.ingram_image_stock_photo_secrets.description",
        version: "0",
        website: "https://stockphotosecrets.recurly.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218001.jpg",
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
        entryUrl: "https://stockphotosecrets.recurly.com/account",
    }

    constructor() {
        super(IngramImageStockPhotoSecretsCollector.CONFIG);
    }
}
