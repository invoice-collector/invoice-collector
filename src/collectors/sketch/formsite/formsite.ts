
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FormsiteCollector extends SketchCollector {

    static CONFIG = {
        id: "formsite",
        name: "FormSite",
        description: "i18n.collectors.formsite.description",
        version: "0",
        website: "https://www.formsite.com/form_app/FormSite?FormId=LoadLogin&Auto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9305.jpg",
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
        entryUrl: "https://www.formsite.com/form_app/FormSite?FormId=LoadLogin&Auto",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FormsiteCollector.CONFIG);
    }
}
