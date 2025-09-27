
import { SketchCollector } from '../../sketchCollector';

export class VoxerCollector extends SketchCollector {

    static CONFIG = {
        id: "voxer",
        name: "Voxer",
        description: "i18n.collectors.voxer.description",
        version: "0",
        website: "https://web.voxer.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740314.jpg",
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
        entryUrl: "https://web.voxer.com/login",
    }

    constructor() {
        super(VoxerCollector.CONFIG);
    }
}
