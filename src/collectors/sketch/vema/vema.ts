
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VemaCollector extends SketchCollector {

    static CONFIG = {
        id: "vema",
        name: "Vema",
        description: "i18n.collectors.vema.description",
        version: "0",
        website: "https://www.vemaeg.de/app/office/dokumente?filter=JTVCJTdCJTIyaWQlMjIlM0ElMjJmdWxsLXRleHQtc2VhcmNoJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJGcmVpdGV4dHN1Y2hlJTNBJTIwVlUtVk0lMjIlMkMlMjJjb25zdHJhaW50JTIyJTNBJTdCJTIyb3BlcmF0b3IlMjIlM0ElMjJlcXVhbCUyMiUyQyUyMmZpZWxkJTIyJ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4604350.jpg",
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
        entryUrl: "https://www.vemaeg.de/app/office/dokumente?filter=JTVCJTdCJTIyaWQlMjIlM0ElMjJmdWxsLXRleHQtc2VhcmNoJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJGcmVpdGV4dHN1Y2hlJTNBJTIwVlUtVk0lMjIlMkMlMjJjb25zdHJhaW50JTIyJTNBJTdCJTIyb3BlcmF0b3IlMjIlM0ElMjJlcXVhbCUyMiUyQyUyMmZpZWxkJTIyJ",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VemaCollector.CONFIG);
    }
}
