
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PierreEtVacancesCollector extends SketchCollector {

    static CONFIG = {
        id: "pierre_et_vacances",
        name: "Pierre et Vacances",
        description: "i18n.collectors.pierre_et_vacances.description",
        version: "0",
        website: "https://my.pierreetvacances.com/fr-fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122465.jpg",
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
        entryUrl: "https://my.pierreetvacances.com/fr-fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PierreEtVacancesCollector.CONFIG);
    }
}
