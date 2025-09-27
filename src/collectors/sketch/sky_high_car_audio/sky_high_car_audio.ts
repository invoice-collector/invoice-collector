
import { SketchCollector } from '../../sketchCollector';

export class SkyHighCarAudioCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_high_car_audio",
        name: "Sky High Car Audio",
        description: "i18n.collectors.sky_high_car_audio.description",
        version: "0",
        website: "https://shcadealers.com/account.php?action=order_status",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049752.jpg",
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
        entryUrl: "https://shcadealers.com/account.php?action=order_status",
    }

    constructor() {
        super(SkyHighCarAudioCollector.CONFIG);
    }
}
