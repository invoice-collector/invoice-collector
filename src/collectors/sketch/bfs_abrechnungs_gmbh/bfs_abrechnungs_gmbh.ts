
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BfsAbrechnungsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "bfs_abrechnungs_gmbh",
        name: "BFS Abrechnungs GmBH",
        description: "i18n.collectors.bfs_abrechnungs_gmbh.description",
        version: "0",
        website: "https://kunden.bfs-abrechnung.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102641.jpg",
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
        loginUrl: "https://kunden.bfs-abrechnung.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BfsAbrechnungsGmbhCollector.CONFIG);
    }
}
