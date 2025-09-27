
import { SketchCollector } from '../../sketchCollector';

export class BigFishAudioCollector extends SketchCollector {

    static CONFIG = {
        id: "big_fish_audio",
        name: "Big Fish Audio",
        description: "i18n.collectors.big_fish_audio.description",
        version: "0",
        website: "https://www.bigfishaudio.com/account.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553258.jpg",
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
        entryUrl: "https://www.bigfishaudio.com/account.html",
    }

    constructor() {
        super(BigFishAudioCollector.CONFIG);
    }
}
