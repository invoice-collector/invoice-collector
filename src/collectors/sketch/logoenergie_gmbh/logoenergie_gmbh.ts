
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LogoenergieGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "logoenergie_gmbh",
        name: "LogoEnergie GmbH",
        description: "i18n.collectors.logoenergie_gmbh.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=49#normal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1538413.jpg",
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
        entryUrl: "https://onlineservice.service-rz.de/?act=login&werknr=49#normal",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LogoenergieGmbhCollector.CONFIG);
    }
}
