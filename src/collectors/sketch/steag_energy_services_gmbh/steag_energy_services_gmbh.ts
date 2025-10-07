
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SteagEnergyServicesGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "steag_energy_services_gmbh",
        name: "STEAG Energy Services GmbH",
        description: "i18n.collectors.steag_energy_services_gmbh.description",
        version: "0",
        website: "https://portal.steag-fernwaerme.de/portal/csmain.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534128.jpg",
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
        entryUrl: "https://portal.steag-fernwaerme.de/portal/csmain.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteagEnergyServicesGmbhCollector.CONFIG);
    }
}
