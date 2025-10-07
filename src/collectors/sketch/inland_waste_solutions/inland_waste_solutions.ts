
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InlandWasteSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "inland_waste_solutions",
        name: "Inland Waste Solutions",
        description: "i18n.collectors.inland_waste_solutions.description",
        version: "0",
        website: "https://billing1.desertmicrohosting.com/InlandServices/default.asp?id=3D862774-97A1-4D6F-AE2A-9AF36B8AF165",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88364.jpg",
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
        entryUrl: "https://billing1.desertmicrohosting.com/InlandServices/default.asp?id=3D862774-97A1-4D6F-AE2A-9AF36B8AF165",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InlandWasteSolutionsCollector.CONFIG);
    }
}
