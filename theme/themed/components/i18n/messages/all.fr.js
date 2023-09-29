export default {
  '@cloudscape-design/components': {
    fr: {
      '[charts]': {
        loadingText: [{ type: 0, value: 'Chargement du graphique' }],
        errorText: [{ type: 0, value: "Impossible d'extraire les données. Réessayez plus tard." }],
        recoveryText: [{ type: 0, value: 'Réessayer' }],
        'i18nStrings.filterLabel': [{ type: 0, value: 'Filtrer les données affichées' }],
        'i18nStrings.filterPlaceholder': [{ type: 0, value: 'Filtrer les données' }],
        'i18nStrings.legendAriaLabel': [{ type: 0, value: 'Légende' }],
        'i18nStrings.xAxisAriaRoleDescription': [{ type: 0, value: 'axe X' }],
        'i18nStrings.yAxisAriaRoleDescription': [{ type: 0, value: 'axe Y' }],
      },
      alert: { dismissAriaLabel: [{ type: 0, value: "Ignorer l'alerte" }] },
      'annotation-context': {
        'i18nStrings.nextButtonText': [{ type: 0, value: 'Suivant' }],
        'i18nStrings.previousButtonText': [{ type: 0, value: 'Précédent' }],
        'i18nStrings.finishButtonText': [{ type: 0, value: 'Terminer' }],
        'i18nStrings.labelDismissAnnotation': [{ type: 0, value: "Ignorer l'annotation" }],
        'i18nStrings.stepCounterText': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tâche ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.labelHotspot': [
          {
            type: 5,
            value: 'openState',
            options: {
              true: {
                value: [
                  { type: 0, value: "Fermer l'annotation pour l'étape " },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: "Ouvrir l'annotation pour l'étape " },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navigation latérale' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Fermer la navigation latérale' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Ouvrir la navigation latérale' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifications' }],
        'ariaLabels.tools': [{ type: 0, value: "Volet d'aide" }],
        'ariaLabels.toolsClose': [{ type: 0, value: "Fermer le volet d'aide" }],
        'ariaLabels.toolsToggle': [{ type: 0, value: "Ouvrir le volet d'aide" }],
      },
      'area-chart': { 'i18nStrings.detailTotalLabel': [{ type: 0, value: 'Total' }] },
      'attribute-editor': { removeButtonText: [{ type: 0, value: 'Supprimer' }] },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Erreur' }],
        selectedAriaLabel: [{ type: 0, value: 'Sélectionné' }],
        enteredTextLabel: [
          { type: 0, value: 'Utiliser : «' },
          { type: 1, value: 'value' },
          { type: 0, value: '»' },
        ],
        recoveryText: [{ type: 0, value: 'Réessayer' }],
      },
      'breadcrumb-group': { expandAriaLabel: [{ type: 0, value: 'Afficher le chemin' }] },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Mois suivant' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mois précédent' }],
        todayAriaLabel: [{ type: 0, value: "Aujourd'hui" }],
      },
      cards: { 'ariaLabels.selectionGroupLabel': [{ type: 0, value: "Sélection de l'élément" }] },
      'code-editor': {
        'i18nStrings.loadingState': [{ type: 0, value: "Chargement de l'éditeur de code en cours" }],
        'i18nStrings.errorState': [
          { type: 0, value: "Une erreur s'est produite lors du chargement de l'éditeur de code." },
        ],
        'i18nStrings.errorStateRecovery': [{ type: 0, value: 'Réessayer' }],
        'i18nStrings.editorGroupAriaLabel': [{ type: 0, value: 'Éditeur de code' }],
        'i18nStrings.statusBarGroupAriaLabel': [{ type: 0, value: "Barre d'état" }],
        'i18nStrings.cursorPosition': [
          { type: 0, value: 'Lig ' },
          { type: 1, value: 'row' },
          { type: 0, value: ', Col ' },
          { type: 1, value: 'column' },
        ],
        'i18nStrings.errorsTab': [{ type: 0, value: 'Erreurs' }],
        'i18nStrings.warningsTab': [{ type: 0, value: 'Avertissements' }],
        'i18nStrings.preferencesButtonAriaLabel': [{ type: 0, value: 'Préférences' }],
        'i18nStrings.paneCloseButtonAriaLabel': [{ type: 0, value: 'Fermer' }],
        'i18nStrings.preferencesModalHeader': [{ type: 0, value: 'Préférences' }],
        'i18nStrings.preferencesModalCancel': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.preferencesModalConfirm': [{ type: 0, value: 'Confirmer' }],
        'i18nStrings.preferencesModalWrapLines': [{ type: 0, value: 'Retour à la ligne' }],
        'i18nStrings.preferencesModalTheme': [{ type: 0, value: 'Thème' }],
        'i18nStrings.preferencesModalLightThemes': [{ type: 0, value: 'Thèmes clairs' }],
        'i18nStrings.preferencesModalDarkThemes': [{ type: 0, value: 'Thèmes sombres' }],
      },
      'collection-preferences': {
        title: [{ type: 0, value: 'Préférences' }],
        confirmLabel: [{ type: 0, value: 'Confirmer' }],
        cancelLabel: [{ type: 0, value: 'Annuler' }],
        'pageSizePreference.title': [{ type: 0, value: 'Taille de la page' }],
        'wrapLinesPreference.label': [{ type: 0, value: 'Retour à la ligne' }],
        'wrapLinesPreference.description': [
          { type: 0, value: 'Sélectionner pour voir tout le texte et retourner à la ligne' },
        ],
        'stripedRowsPreference.label': [{ type: 0, value: 'Lignes par bandes' }],
        'stripedRowsPreference.description': [
          { type: 0, value: 'Sélectionner pour ajouter des lignes ombragées alternées' },
        ],
        'contentDensityPreference.label': [{ type: 0, value: 'Mode compact' }],
        'contentDensityPreference.description': [
          { type: 0, value: 'Sélectionner pour afficher le contenu dans un mode plus dense et plus compact' },
        ],
        'contentDisplayPreference.title': [{ type: 0, value: 'Préférences de colonne' }],
        'contentDisplayPreference.description': [
          { type: 0, value: "Personnalisez la visibilité et l'ordre des colonnes." },
        ],
        'contentDisplayPreference.dragHandleAriaLabel': [{ type: 0, value: 'Faire glisser' }],
        'contentDisplayPreference.dragHandleAriaDescription': [
          {
            type: 0,
            value:
              "Utilisez Espace ou Entrée pour activer le glissement pour un élément, puis utilisez les touches fléchées pour déplacer la position de l'élément. Pour terminer le déplacement de la position, utilisez Espace ou Entrée. Pour ignorer le déplacement, utilisez Échap.",
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndStarted': [
          { type: 0, value: 'Élément sélectionné à la position ' },
          { type: 1, value: 'position' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'total' },
        ],
        'contentDisplayPreference.liveAnnouncementDndDiscarded': [{ type: 0, value: 'Réorganisation annulée' }],
        'contentDisplayPreference.liveAnnouncementDndItemReordered': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: "Remettre l'élément à la position " },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: "Déplacer l'élément vers la position " },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndItemCommitted': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: "L'élément a été replacé dans sa position initiale " },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: "L'élément a été déplacé de la position " },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' à ' },
                  { type: 1, value: 'finalPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'date-range-picker': {
        'i18nStrings.relativeModeTitle': [{ type: 0, value: 'Mode relatif' }],
        'i18nStrings.absoluteModeTitle': [{ type: 0, value: 'Mode absolu' }],
        'i18nStrings.relativeRangeSelectionHeading': [{ type: 0, value: 'Choisir une plage' }],
        'i18nStrings.cancelButtonLabel': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.clearButtonLabel': [{ type: 0, value: 'Effacer et ignorer' }],
        'i18nStrings.applyButtonLabel': [{ type: 0, value: 'Appliquer' }],
        'i18nStrings.customRelativeRangeOptionLabel': [{ type: 0, value: 'Plage personnalisée' }],
        'i18nStrings.customRelativeRangeOptionDescription': [
          { type: 0, value: 'Définir une plage personnalisée dans le passé' },
        ],
        'i18nStrings.customRelativeRangeUnitLabel': [{ type: 0, value: 'Unité de temps' }],
        'i18nStrings.customRelativeRangeDurationLabel': [{ type: 0, value: 'Durée' }],
        'i18nStrings.customRelativeRangeDurationPlaceholder': [{ type: 0, value: 'Saisir une durée' }],
        'i18nStrings.startDateLabel': [{ type: 0, value: 'Date de début' }],
        'i18nStrings.startTimeLabel': [{ type: 0, value: 'Heure de début' }],
        'i18nStrings.endDateLabel': [{ type: 0, value: 'Date de fin' }],
        'i18nStrings.endTimeLabel': [{ type: 0, value: 'Heure de fin' }],
        'i18nStrings.dateTimeConstraintText': [
          {
            type: 0,
            value: "Pour la date, utilisez le format AAAA/MM/JJ. Pour l'heure, utilisez le format 24 heures.",
          },
        ],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }],
        'i18nStrings.renderSelectedAbsoluteRangeAriaLive': [
          { type: 0, value: 'Plage sélectionnée de ' },
          { type: 1, value: 'startDate' },
          { type: 0, value: ' à ' },
          { type: 1, value: 'endDate' },
        ],
        'i18nStrings.formatRelativeRange': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: {
                value: [
                  { type: 0, value: 'Dernier ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                ],
              },
              other: {
                value: [
                  { type: 0, value: 'Dernières ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                  { type: 0, value: 's' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.formatUnit': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: { value: [{ type: 1, value: 'unit' }] },
              other: {
                value: [
                  { type: 1, value: 'unit' },
                  { type: 0, value: 's' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      drawer: { 'i18nStrings.loadingText': [{ type: 0, value: 'Chargement du contenu en cours' }] },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'En cours' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Informations' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Toutes les notifications' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Réussi' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Avertissement' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Erreur' }] },
      'help-panel': { loadingText: [{ type: 0, value: 'Chargement du contenu en cours' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Effacer' }] },
      link: { externalIconAriaLabel: [{ type: 0, value: "Elle s'ouvre dans un nouvel onglet" }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Fermer le modal' }] },
      multiselect: {
        deselectAriaLabel: [
          { type: 0, value: 'Supprimer ' },
          { type: 1, value: 'option__label' },
        ],
      },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Page suivante' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Page ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de toutes les pages' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Page précédente' }],
      },
      'pie-chart': {
        'i18nStrings.detailsValue': [{ type: 0, value: 'Valeur' }],
        'i18nStrings.detailsPercentage': [{ type: 0, value: 'Pourcentage' }],
        'i18nStrings.chartAriaRoleDescription': [{ type: 0, value: 'Diagramme circulaire' }],
        'i18nStrings.segmentAriaRoleDescription': [{ type: 0, value: 'Segment' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Fermer la fenêtre contextuelle' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Toutes les propriétés' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Appliquer' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Effacer les filtres' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Modifier le filtre' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propriétés' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valeurs' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'et' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'ou' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contient' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Ne contient pas' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: "N'est pas égal à" }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Égal à' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Supérieur ou égal à' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Supérieur à' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Inférieur ou égal à' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Inférieur à' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Opérateur' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Opérateurs' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propriété' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Afficher moins' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Afficher plus' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valeur' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: " n'est pas égal à " },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est supérieur à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est supérieur ou égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est inférieur à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est inférieur ou égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contient ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ne contient pas ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      's3-resource-selector': {
        'i18nStrings.inContextSelectPlaceholder': [{ type: 0, value: 'Choisir une version' }],
        'i18nStrings.inContextBrowseButton': [{ type: 0, value: 'Parcourir S3' }],
        'i18nStrings.inContextViewButton': [{ type: 0, value: 'Afficher' }],
        'i18nStrings.inContextViewButtonAriaLabel': [{ type: 0, value: "Afficher (s'ouvre dans un nouvel onglet)" }],
        'i18nStrings.inContextLoadingText': [{ type: 0, value: 'Chargement de la ressource' }],
        'i18nStrings.inContextUriLabel': [{ type: 0, value: 'URI S3' }],
        'i18nStrings.inContextVersionSelectLabel': [{ type: 0, value: "Version de l'objet" }],
        'i18nStrings.modalTitle': [{ type: 0, value: 'Choisir une archive dans S3' }],
        'i18nStrings.modalCancelButton': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.modalSubmitButton': [{ type: 0, value: 'Choisir' }],
        'i18nStrings.modalBreadcrumbRootItem': [{ type: 0, value: 'Compartiments S3' }],
        'i18nStrings.selectionBuckets': [{ type: 0, value: 'Compartiments' }],
        'i18nStrings.selectionObjects': [{ type: 0, value: 'Objets' }],
        'i18nStrings.selectionVersions': [{ type: 0, value: 'Versions' }],
        'i18nStrings.selectionBucketsSearchPlaceholder': [{ type: 0, value: 'Trouver un compartiment' }],
        'i18nStrings.selectionObjectsSearchPlaceholder': [{ type: 0, value: 'Rechercher un objet par préfixe' }],
        'i18nStrings.selectionVersionsSearchPlaceholder': [{ type: 0, value: 'Trouver la version' }],
        'i18nStrings.selectionBucketsLoading': [{ type: 0, value: 'Chargement des compartiments' }],
        'i18nStrings.selectionBucketsNoItems': [{ type: 0, value: 'Aucun compartiment' }],
        'i18nStrings.selectionObjectsLoading': [{ type: 0, value: 'Chargement des objets' }],
        'i18nStrings.selectionObjectsNoItems': [{ type: 0, value: 'Aucun objet' }],
        'i18nStrings.selectionVersionsLoading': [{ type: 0, value: 'Chargement des versions' }],
        'i18nStrings.selectionVersionsNoItems': [{ type: 0, value: 'Aucune version' }],
        'i18nStrings.filteringNoMatches': [{ type: 0, value: 'Aucune correspondance' }],
        'i18nStrings.filteringCantFindMatch': [{ type: 0, value: 'Impossible de trouver une correspondance.' }],
        'i18nStrings.clearFilterButtonText': [{ type: 0, value: 'Effacer le filtre' }],
        'i18nStrings.columnBucketID': [{ type: 0, value: 'ID' }],
        'i18nStrings.columnBucketName': [{ type: 0, value: 'Nom' }],
        'i18nStrings.columnBucketCreationDate': [{ type: 0, value: 'Date de création' }],
        'i18nStrings.columnBucketRegion': [{ type: 0, value: 'Région' }],
        'i18nStrings.columnObjectKey': [{ type: 0, value: 'Clé' }],
        'i18nStrings.columnObjectLastModified': [{ type: 0, value: 'Dernière modification' }],
        'i18nStrings.columnObjectSize': [{ type: 0, value: 'Taille' }],
        'i18nStrings.columnVersionID': [{ type: 0, value: 'ID de version' }],
        'i18nStrings.columnVersionLastModified': [{ type: 0, value: 'Dernière modification' }],
        'i18nStrings.columnVersionSize': [{ type: 0, value: 'Taille' }],
        'i18nStrings.validationPathMustBegin': [{ type: 0, value: 'Le chemin doit commencer par s3 ://' }],
        'i18nStrings.validationBucketLowerCase': [
          { type: 0, value: 'Le nom du compartiment doit commencer par une minuscule ou un chiffre.' },
        ],
        'i18nStrings.validationBucketMustNotContain': [
          { type: 0, value: 'Le nom du compartiment ne doit pas contenir de majuscules.' },
        ],
        'i18nStrings.validationBucketLength': [
          { type: 0, value: 'Le nom du compartiment doit comporter entre 3 et 63 caractères.' },
        ],
        'i18nStrings.validationBucketMustComplyDns': [
          { type: 0, value: 'Le nom du compartiment doit être conforme aux conventions de dénomination DNS.' },
        ],
        'i18nStrings.labelSortedDescending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', triés par ordre décroissant' },
        ],
        'i18nStrings.labelSortedAscending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', triés par ordre croissant' },
        ],
        'i18nStrings.labelNotSorted': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', non triés' },
        ],
        'i18nStrings.labelsBucketsSelection.selectionGroupLabel': [{ type: 0, value: 'Compartiments' }],
        'i18nStrings.labelsBucketsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Name' }],
        'i18nStrings.labelsObjectsSelection.selectionGroupLabel': [{ type: 0, value: 'Objets' }],
        'i18nStrings.labelsObjectsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Key' }],
        'i18nStrings.labelsVersionsSelection.selectionGroupLabel': [{ type: 0, value: 'Versions' }],
        'i18nStrings.labelsVersionsSelection.itemSelectionLabel': [{ type: 1, value: 'item__VersionId' }],
        'i18nStrings.labelFiltering': [
          { type: 0, value: 'Trouver ' },
          { type: 1, value: 'itemsType' },
        ],
        'i18nStrings.labelRefresh': [{ type: 0, value: 'Actualiser les données' }],
        'i18nStrings.labelBreadcrumbs': [{ type: 0, value: 'Navigation S3' }],
        'i18nStrings.filteringCounterText': [
          {
            type: 6,
            value: 'count',
            options: {
              one: { value: [{ type: 0, value: '1 correspondance' }] },
              other: {
                value: [
                  { type: 1, value: 'count' },
                  { type: 0, value: ' correspondances' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Erreur' }],
        selectedAriaLabel: [{ type: 0, value: 'Sélectionné' }],
        recoveryText: [{ type: 0, value: 'Réessayer' }],
      },
      'split-panel': {
        'i18nStrings.closeButtonAriaLabel': [{ type: 0, value: 'Fermer le panneau' }],
        'i18nStrings.openButtonAriaLabel': [{ type: 0, value: 'Ouvrir le panneau' }],
        'i18nStrings.preferencesTitle': [{ type: 0, value: 'Préférences du panneau divisé' }],
        'i18nStrings.preferencesPositionLabel': [{ type: 0, value: 'Position du panneau divisé' }],
        'i18nStrings.preferencesPositionDescription': [
          { type: 0, value: 'Choisir la position par défaut du panneau divisé pour le service.' },
        ],
        'i18nStrings.preferencesPositionSide': [{ type: 0, value: 'Côté' }],
        'i18nStrings.preferencesPositionBottom': [{ type: 0, value: 'En bas' }],
        'i18nStrings.preferencesConfirm': [{ type: 0, value: 'Confirmer' }],
        'i18nStrings.preferencesCancel': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.resizeHandleAriaLabel': [{ type: 0, value: 'Redimensionner le panneau divisé' }],
      },
      table: {
        'ariaLabels.submittingEditText': [{ type: 0, value: 'Soumission de modification' }],
        'ariaLabels.successfulEditLabel': [{ type: 0, value: 'Modification réussie' }],
        'columnDefinitions.editConfig.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }],
        'columnDefinitions.editConfig.editIconAriaLabel': [{ type: 0, value: 'modifiable' }],
      },
      tabs: {
        'i18nStrings.scrollLeftAriaLabel': [{ type: 0, value: 'Faire défiler vers la gauche' }],
        'i18nStrings.scrollRightAriaLabel': [{ type: 0, value: 'Faire défiler vers la droite' }],
      },
      'tag-editor': {
        'i18nStrings.keyPlaceholder': [{ type: 0, value: 'Saisir une clé' }],
        'i18nStrings.valuePlaceholder': [{ type: 0, value: 'Saisir une valeur' }],
        'i18nStrings.addButton': [{ type: 0, value: 'Ajouter une nouvelle identification' }],
        'i18nStrings.removeButton': [{ type: 0, value: 'Supprimer' }],
        'i18nStrings.removeButtonAriaLabel': [
          { type: 0, value: 'Supprimer ' },
          { type: 1, value: 'tag__key' },
        ],
        'i18nStrings.undoButton': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.undoPrompt': [
          { type: 0, value: "Cette identification sera supprimée lors de l'enregistrement des modifications." },
        ],
        'i18nStrings.loading': [
          { type: 0, value: 'Chargement des identifications associées à cette ressource en cours' },
        ],
        'i18nStrings.keyHeader': [{ type: 0, value: 'Clé' }],
        'i18nStrings.valueHeader': [{ type: 0, value: 'Valeur' }],
        'i18nStrings.optional': [{ type: 0, value: 'facultatif' }],
        'i18nStrings.keySuggestion': [{ type: 0, value: "Clé d'identification personnalisée" }],
        'i18nStrings.valueSuggestion': [{ type: 0, value: "Valeur d'identification personnalisée" }],
        'i18nStrings.emptyTags': [{ type: 0, value: "Aucune identification n'est associée à la ressource." }],
        'i18nStrings.tooManyKeysSuggestion': [
          { type: 0, value: 'Vous avez plus de clés que ce qui peut être affiché.' },
        ],
        'i18nStrings.tooManyValuesSuggestion': [
          { type: 0, value: 'Vous avez plus de valeurs que ce qui peut être affiché.' },
        ],
        'i18nStrings.keysSuggestionLoading': [{ type: 0, value: "Chargement des clés d'identification en cours" }],
        'i18nStrings.keysSuggestionError': [
          { type: 0, value: "Les clés d'identification n'ont pas pu être récupérées." },
        ],
        'i18nStrings.valuesSuggestionLoading': [{ type: 0, value: "Chargement des valeurs d'identification en cours" }],
        'i18nStrings.valuesSuggestionError': [
          { type: 0, value: "Les valeurs d'identification n'ont pas pu être récupérées." },
        ],
        'i18nStrings.emptyKeyError': [{ type: 0, value: "Vous devez spécifier une clé d'identification." }],
        'i18nStrings.maxKeyCharLengthError': [
          {
            type: 0,
            value: "Le nombre maximal de caractères que vous pouvez utiliser dans une clé d'identification est de 128.",
          },
        ],
        'i18nStrings.maxValueCharLengthError': [
          {
            type: 0,
            value:
              "Le nombre maximal de caractères que vous pouvez utiliser dans une valeur d'identification est de 256.",
          },
        ],
        'i18nStrings.duplicateKeyError': [{ type: 0, value: "Vous devez spécifier une clé d'identification unique." }],
        'i18nStrings.invalidKeyError': [
          {
            type: 0,
            value:
              "Clé non valide. Les clés peuvent contenir uniquement des caractères Unicode, des chiffres, des espaces blancs et l'un des éléments suivants : _.:/=+@-",
          },
        ],
        'i18nStrings.invalidValueError': [
          {
            type: 0,
            value:
              "Valeur non valide. Les valeurs peuvent contenir uniquement des caractères Unicode, des chiffres, des espaces blancs et l'un des éléments suivants : _.:/=+@-",
          },
        ],
        'i18nStrings.awsPrefixError': [{ type: 0, value: 'Impossible de commencer par aws :' }],
        'i18nStrings.tagLimitReached': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Vous avez atteint la limite de 1 identification.' }] },
              other: {
                value: [
                  { type: 0, value: 'Vous avez atteint la limite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' identifications.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimitExceeded': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Vous avez dépassé la limite de 1 identification.' }] },
              other: {
                value: [
                  { type: 0, value: 'Vous avez dépassé la limite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' identifications.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimit': [
          {
            type: 5,
            value: 'tagLimitAvailable',
            options: {
              true: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      other: {
                        value: [
                          { type: 0, value: "Vous pouvez ajouter jusqu'à " },
                          { type: 1, value: 'tagLimit' },
                          { type: 0, value: ' identifications.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              false: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      one: {
                        value: [{ type: 0, value: "Vous pouvez ajouter jusqu'à 1 identification supplémentaire." }],
                      },
                      other: {
                        value: [
                          { type: 0, value: "Vous pouvez ajouter jusqu'à " },
                          { type: 1, value: 'availableTags' },
                          { type: 0, value: ' identifications supplémentaires.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'token-group': {
        'i18nStrings.limitShowFewer': [{ type: 0, value: 'Afficher moins' }],
        'i18nStrings.limitShowMore': [{ type: 0, value: 'Afficher plus' }],
      },
      'top-navigation': {
        'i18nStrings.searchIconAriaLabel': [{ type: 0, value: 'Rechercher' }],
        'i18nStrings.searchDismissIconAriaLabel': [{ type: 0, value: 'Fermer la recherche' }],
        'i18nStrings.overflowMenuTriggerText': [{ type: 0, value: 'En savoir plus' }],
        'i18nStrings.overflowMenuDismissIconAriaLabel': [{ type: 0, value: 'Fermer le menu' }],
        'i18nStrings.overflowMenuBackIconAriaLabel': [{ type: 0, value: 'Retour' }],
        'i18nStrings.overflowMenuTitleText': [{ type: 0, value: 'Tous' }],
      },
      'tutorial-panel': {
        'i18nStrings.loadingText': [{ type: 0, value: 'Chargement en cours' }],
        'i18nStrings.tutorialListTitle': [{ type: 0, value: 'Choisir un didacticiel' }],
        'i18nStrings.tutorialListDownloadLinkText': [{ type: 0, value: 'Télécharger la version PDF' }],
        'i18nStrings.labelTutorialListDownloadLink': [
          { type: 0, value: 'Télécharger la version PDF de ce didacticiel' },
        ],
        'i18nStrings.tutorialCompletedText': [{ type: 0, value: 'Didacticiel terminé' }],
        'i18nStrings.learnMoreLinkText': [{ type: 0, value: 'En savoir plus' }],
        'i18nStrings.startTutorialButtonText': [{ type: 0, value: 'Commencer le didacticiel' }],
        'i18nStrings.restartTutorialButtonText': [{ type: 0, value: 'Redémarrer le didacticiel' }],
        'i18nStrings.completionScreenTitle': [{ type: 0, value: 'Félicitations ! Vous avez terminé le didacticiel.' }],
        'i18nStrings.feedbackLinkText': [{ type: 0, value: 'Commentaires' }],
        'i18nStrings.dismissTutorialButtonText': [{ type: 0, value: 'Ignorer le didacticiel' }],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tâche ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.stepTitle': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' : ' },
          { type: 1, value: 'stepTitle' },
        ],
        'i18nStrings.labelExitTutorial': [{ type: 0, value: 'Ignorer le didacticiel' }],
        'i18nStrings.labelTotalSteps': [
          { type: 0, value: "Nombre total d'étapes : " },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.labelsTaskStatus.pending': [{ type: 0, value: 'En attente' }],
        'i18nStrings.labelsTaskStatus.in-progress': [{ type: 0, value: 'En cours' }],
        'i18nStrings.labelsTaskStatus.success': [{ type: 0, value: 'Réussi' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.skipToButtonLabel': [
          { type: 0, value: 'Passer à ' },
          { type: 1, value: 'task__title' },
        ],
        'i18nStrings.navigationAriaLabel': [{ type: 0, value: 'Étapes' }],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Précédent' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Suivant' }],
        'i18nStrings.optional': [{ type: 0, value: 'facultatif' }],
        'i18nStrings.nextButtonLoadingAnnouncement': [{ type: 0, value: "Chargement de l'étape suivante" }],
        'i18nStrings.submitButtonLoadingAnnouncement': [{ type: 0, value: 'Soumission du formulaire' }],
      },
    },
  },
};
