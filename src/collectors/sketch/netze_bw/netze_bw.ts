
import { SketchCollector } from '../../sketchCollector';

export class NetzeBwCollector extends SketchCollector {

    static CONFIG = {
        id: "netze_bw",
        name: "Netze BW",
        description: "i18n.collectors.netze_bw.description",
        version: "0",
        website: "https://meine.netze-bw.de/meine-anlagen-und-auftraege/einspeiseanlage/8831082544/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918677.jpg",
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
        entryUrl: "https://meine.netze-bw.de/meine-anlagen-und-auftraege/einspeiseanlage/8831082544/dokumente",
    }

    constructor() {
        super(NetzeBwCollector.CONFIG);
    }
}
