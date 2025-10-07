
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarienfeldMultimediaCollector extends SketchCollector {

    static CONFIG = {
        id: "marienfeld_multimedia",
        name: "Marienfeld Multimedia",
        description: "i18n.collectors.marienfeld_multimedia.description",
        version: "0",
        website: "https://kundenportal.vivawest.de/?etcc_cmp_onsite=kundenportal&etcc_med_onsite=website&etcc_cu=onsite&etcc_ctv_onsite=artikel-bewerbung-kundenportal-8.12.17",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9495.jpg",
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
        entryUrl: "https://kundenportal.vivawest.de/?etcc_cmp_onsite=kundenportal&etcc_med_onsite=website&etcc_cu=onsite&etcc_ctv_onsite=artikel-bewerbung-kundenportal-8.12.17",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarienfeldMultimediaCollector.CONFIG);
    }
}
