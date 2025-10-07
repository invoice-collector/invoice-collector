
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MockuuupsStudioCollector extends SketchCollector {

    static CONFIG = {
        id: "mockuuups_studio",
        name: "Mockuuups Studio",
        description: "i18n.collectors.mockuuups_studio.description",
        version: "0",
        website: "https://mockuuups.studio/manage/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/943600.jpg",
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
        entryUrl: "https://mockuuups.studio/manage/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MockuuupsStudioCollector.CONFIG);
    }
}
