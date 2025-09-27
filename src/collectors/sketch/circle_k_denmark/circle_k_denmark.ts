
import { SketchCollector } from '../../sketchCollector';

export class CircleKDenmarkCollector extends SketchCollector {

    static CONFIG = {
        id: "circle_k_denmark",
        name: "CIRCLE K - Denmark",
        description: "i18n.collectors.circle_k_denmark.description",
        version: "0",
        website: "https://www.circlek.dk/dk_DK/pg1334072984722/privat/voresbutikker/PrivatKort/MitCircleK.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22015.jpg",
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
        entryUrl: "https://www.circlek.dk/dk_DK/pg1334072984722/privat/voresbutikker/PrivatKort/MitCircleK.html",
    }

    constructor() {
        super(CircleKDenmarkCollector.CONFIG);
    }
}
