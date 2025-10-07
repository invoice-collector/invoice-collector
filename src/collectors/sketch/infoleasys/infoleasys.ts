
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InfoleasysCollector extends SketchCollector {

    static CONFIG = {
        id: "infoleasys",
        name: "Infoleasys",
        description: "i18n.collectors.infoleasys.description",
        version: "0",
        website: "https://portail.infoleasys.fr/ArtisWeb/portail/login/auth/01.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175674.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://portail.infoleasys.fr/ArtisWeb/portail/login/auth/01.action",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfoleasysCollector.CONFIG);
    }
}
