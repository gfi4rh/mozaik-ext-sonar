# Mozaïk Sonar widgets

## Sonar — Qualities

> Montre les statistique sonar d'un projet donné

### parameters

key            | required | description
---------------|----------|----------------------------------------------------
`title`        | yes      | *Title of the widget*
`url`          | yes      | *URL de l'hote Sonar*
`componentKey` | yes      | *Nom du project sur Sonar*
`issues`       | yes      | *Tableau contenant les ids et noms des statistiques pour les issues*
`metrics`      | yes      | *Tableau contenant les ids et noms des statistiques pour les métriques*

### usage

```javascript
{
  type: 'sonar.qualities',
  title : "Sonar",
  url : "http://domain.com/sonar",
  componentKey : "my.project",
  issues : [{
      id : "open_issues",
      name : "Open issues"
    },{
      id : "reopened_issues",
      name : "Reopened issues"
    },{
      id : "minor_violations",
      name : "Minor issues"
    },{
      id : "major_violations",
      name : "Major issues"
    },{
      id : "critical_violations",
      name : "Critical issues"
    },{
      id : "blocker_violations",
      name : "Blocker violations"
    }],
  metrics :  [{
      id : "ncloc",
      name :"Lines of code"
    },{
      id : "files",
      name : "Files"
    },{
      id : "functions",
      name : "Functions"
    },{
      id : "sqale_index",
      name : "Debt"
    },{
      id : "duplicated_lines_density",
      name : "Duplications"
    }],
  columns: 3.5, rows: 1,
  x: 0, y: 1
}
```
